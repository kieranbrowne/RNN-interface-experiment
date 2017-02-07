(ns rnn-app.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
   [reagent.core :as r :refer [atom cursor]]
   [cljs.core.async :refer  [<!]]
   [cljs-http.client :as http]
   ))


;; Single source of truth
(def state
  (atom {:input (vec (repeat (* 28 28 4) 255))
         :model nil}))

(def model (cursor state [:model]))
(def input (cursor state [:input]))

;; Load MNIST pretrained network
(go (let [response (<! (http/get "https://s3.amazonaws.com/neocortex-js/examples-data/mnist_mlp_model_params.json.gz"
                                 {:with-credentials? false}))]
      (prn (:status response))
      (reset! model 
              (js->clj (:body response) :keywordize-keys true)
              )))

(defonce debug?
  ^boolean js/goog.DEBUG)

(defn darken-point [e]
  (let [x (.floor js/Math (/ (-> e .-nativeEvent .-offsetX) (/ 500 28)))
        y (.floor js/Math (/ (-> e .-nativeEvent .-offsetY) (/ 500 28)))
        i (* 4 (+ (* y 28) x))
        ]
    (do
      (.log js/console e)
      (swap! input #(update % i (partial + -40)))
      (swap! input #(update % (+ i 1) (partial + -40)))
      (swap! input #(update % (+ i 2) (partial + -40)))
    )
  ))

;; Canvas 
(defn input-layer-canvas [input-layer]
  (let [this (atom nil)]
	(r/create-class
	  {:component-did-mount
       #(reset! this (r/dom-node %))
       :component-did-update
       #(let [ctx (.getContext @this "2d")
              data (.createImageData ctx 28 28)]
          (do 
            (set! (.-imageSmoothingEnabled ctx) false)
            (doseq [i (range 0 (* 28 28 4))]
              (aset (.-data data) i (nth @input i)))
            (.putImageData ctx data 0 0)
            (.drawImage ctx @this 
                        0 0 28 28 
                        0 0 500 500)
            )
          )
	   :display-name  "canvas"
	   :reagent-render
	   (fn [i input-layer]
		 [:canvas 
          (if-let [canvas @this]
            {:width 500
             :height 500
             ; :style {:transform "scale(.86062) skewX(30deg) rotate(-30deg)"}
             :data-v (first @input)
             :style {:transform 
                     "rotateX(60deg) rotateY(0deg) rotateZ(-45deg)"
                     :margin-left "150px"
                     :margin-top "-203px"
                     :position "relative"
                     :z-index (- 200 i) 
                     :opacity 0.8
                     :box-shadow 
                     "-9px 9px 7px rgba(0,0,0,0.6)" }
             :on-click darken-point
             :on-mouse-move darken-point
             }
            )
          ])})
	))

(defn synapse [weight]
  [:div {:style 
         {:width (str (/ 100 28) "%")
          :padding-bottom (str (/ 100 28) "%")
          :background (str "rgb(" 0 (rand-int 255) 0 ")") 
          :display "inline-block"
          }}])

(defn neuron [value]
  )

(defn hidden-layer [layer]
  [:div {:style {:width "500px" :line-height 0}}
   ; (for [s (-> @layer first :parameters first :W)]
   ;      [synapse s])
   ]

  )

; (defn weights-to-img-data)

;; Page
(defn page [ratom]
  [:div {:style {:background "#ddd"}}
   [:h2 "RNN"]
   [hidden-layer model]
   [:p (str (-> @model first :parameters first :W count))]
   [input-layer-canvas 1 nil]
   [input-layer-canvas 2 nil]
   ]) 


;; Initialize App
(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")
    ))

(defn reload []
  (r/render [page model]
            (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (reload))
