(defproject rnn-app "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [cljs-http  "0.1.42"]
                 [cljs-ajax "0.5.8"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-sassy  "1.0.8"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles
  {:dev
   {:dependencies []

    :plugins      [[lein-figwheel "0.5.8"]]
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "rnn-app.core/reload"}
     :compiler     {:main                 rnn-app.core
                    :optimizations        :none
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/dev"
                    :asset-path           "js/compiled/dev"
                    :source-map-timestamp true}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            rnn-app.core
                    :optimizations   :advanced
                    :output-to       "resources/public/js/compiled/app.js"
                    :output-dir      "resources/public/js/compiled/min"
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    ]}

    :sass {:src "src/sass/" :dst "resources/public/css/"}
  )
