;(function() {
  var tabData = [
    {
      header: 'History',
      body: 'The American Flag was first created in 1781'
    },
    {
      header: 'Colors',
      body: 'The American Flag has red, white, and blue'
    }
  ];

  function TabContainer(tabs, headerContainer, bodyContainer) {
    this.tabs = tabs;
    for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i];
      var tabContainer = this;
      tab.view.appendTo(headerContainer, bodyContainer);
      function respondToClick(i) {
        return function() {
          tabContainer.setActive(i);
        }
      }
      tab.view.headerView.addEventListener('click', respondToClick(i));
    }
  }

  TabContainer.prototype.setActive = function(index) {
    this.activeTab = index;
    for (var i = 0; i < this.tabs.length; i++) {
      this.tabs[i].setActive(i === index);
    }
  }

  function Tab(params) {
    this.model = new Tab.Model(params);
    this.view = new Tab.View();
    this.view.render(this.model);
  }

  Tab.prototype.setActive = function(isActive) {
    this.view.setActive(isActive);
  }

  Tab.Model = function(params) {
    this.header = params.header;
    this.body = params.body;
  }

  Tab.View = function() {
    this.headerView = document.createElement('div');
    this.headerView.classList.add('tab-header');
    this.bodyView = document.createElement('div');
    this.bodyView.classList.add('tab-body');
  }

  Tab.View.prototype.render = function(model) {
    this.headerView.innerHTML = model.header;
    this.bodyView.innerHTML = model.body;
  }

  Tab.View.prototype.appendTo = function(headerContainer, bodyContainer) {
    headerContainer.appendChild(this.headerView);
    bodyContainer.appendChild(this.bodyView);
  }

  Tab.View.prototype.setActive = function(isActive) {
    if (isActive) {
      this.bodyView.classList.add('active');
    } else {
      this.bodyView.classList.remove('active');
    }
  }

  var headerContainer = document.getElementsByClassName('tabs')[0];
  var bodyContainer = document.getElementsByClassName('tab-texts')[0];

  var tabs = [];
  for (var i = 0; i < tabData.length; i++) {
    tabs.push( new Tab(tabData[i]) );
  }

  var container = new TabContainer(tabs, headerContainer, bodyContainer);
  container.setActive();
})();