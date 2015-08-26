# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Home"
      id: "home"
      location: "movie#categories" # Movie Category List
    }
    {
      title: "Search"
      id: "search"
      location: "example#settings"
    }
    {
      title: "Random"
      id: "random"
      location: "http://google.com" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  drawers:
     left:
       id: "leftDrawer"
       location: "movie#drawer"
       showOnAppLoad: false
     options:
       animation: "swingingDoor"

  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
