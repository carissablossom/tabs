;(function() {
  var tabData = [
    {
      header: 'History',
      body: 'Francis Hopkinson of New Jersey a naval flag designer, and a signer of the Declaration of Independence, designed the 1777 flag while he was the Chairman of the Continental Navy Board&rsquo;s Middle Department, sometime between his appointment to that position in November 1776 and the time that the flag resolution was adopted in June 1777. The Navy Board was under the Continental Marine Committee. Not only did Hopkinson claim that he designed the U.S. flag, but he also claimed that he designed a flag for the U.S. Navy. Hopkinson was the only person to have made such a claim during his own lifetime, when he sent a letter and several bills to Congress for his work. These claims are documented in the Journals of the Continental Congress and George Hasting&rsquo;s biography of Hopkinson. Hopkinson initially wrote a letter to Congress, via the Continental Board of Admiralty. In this letter, he asked for a "Quarter Cask of the Public Wine" as payment for designing the U.S. Flag, the seal for the Admiralty Board, the seal for the Treasury Board, Continental currency, the Great Seal of the United States, and other devices. However, in three subsequent bills to Congress, Hopkinson asked to be paid in cash, but he did not list his U.S. Flag design. Instead, he asked to be paid for designing the “great Naval Flag of the United States” in the first bill; the “Naval Flag of the United States” in the second bill; and “the Naval Flag of the States” in the third, along with the other items. The flag references were generic terms for the naval ensign that Hopkinson had designed, that is, a flag of seven red stripes and six white ones. The predominance of red stripes made the naval flag more visible against the sky on a ship at sea. By contrast, Hopkinson’s flag for the United States had seven white stripes, and six red ones – in reality, six red stripes laid on a white background. Hopkinson’s sketches have not been found, but we can make these conclusions because Hopkinson incorporated different stripe arrangements in the Admiralty (naval) Seal that he designed in the Spring of 1780 and the Great Seal of the United States that he proposed at the same time. His Admiralty Seal had seven red stripes; whereas, his second U.S. Seal proposal had seven white ones. Hopkinson’s flag for the Navy is the one that the Nation preferred as the national flag. Remnants of Hopkinson’s U.S. Flag of seven white stripes can be found in the Great Seal of the United States and the President’s seal. When Hopkinson was chairman of the Navy Board, his position was like that of today’s Secretary of the Navy. The payment was not made, however, because it was determined he had already received a salary as a member of Congress. This definitively contradicts the legend of the Betsy Ross flag, which suggests that she sewed the first Stars and Stripes flag by request of the government in the Spring of 1776. Furthermore, a letter from the War Board to George Washington on May 10, 1779, documents that there was still no design established for a national flag for the Army&rsquo;s use in battle.\nThe origin of the stars and stripes design has been muddled by a story disseminated by the descendants of Betsy Ross. The apocryphal story credits Betsy Ross for sewing the first flag from a pencil sketch handed to her by George Washington. No evidence for this exists either in the diaries of George Washington nor in the records of the Continental Congress. Indeed, nearly a century passed before Ross&rsquo; grandson, William Canby, first publicly suggested the story in 1870. By her family&rsquo;s own admission, Ross ran an upholstery business, and she had never made a flag as of the supposed visit in June 1776. Furthermore, her grandson admitted that his own search through the Journals of Congress and other official records failed to find corroboration of his grandmother\'s story.\nThe family of Rebecca Young claimed that she sewed the first flag. Young\'s daughter was Mary Pickersgill, who made the Star Spangled Banner Flag. According to rumor, the Washington family coat of arms, shown in a 15th-century window of Selby Abbey, was the origin of the stars and stripes'
    },
    {
      header: 'Colors',
      body: 'The exact red, white, and blue colors to be used in the flag are specified with reference to the CAUS Standard Color Reference of America, 10th edition. Specifically, the colors are "White", "Old Glory Red", and "Old Glory Blue". The CIE coordinates for the colors of the 9th edition of the Standard Color Card were formally specified in JOSA in 1946. These colors form the standard for cloth, and there is no perfect way to convert them to RGB for display on screen or CMYK for printing.\nAs with the design, the official colors are only officially required for flags produced for the U.S. federal government, and other colors are often used for mass-market flags, printed reproductions, and other products intended to evoke flag colors. The practice of using more saturated colors than the official cloth is not new. As Taylor, Knoche, and Granville wrote in 1950: "The color of the official wool bunting [of the blue field] is a very dark blue, but printed reproductions of the flag, as well as merchandise supposed to match the flag, present the color as a deep blue much brighter than the official wool."\nSometimes, Pantone Matching System (PMS) approximations to the flag colors are used. One set was given on the website of the U.S. embassy in London as early as 1998; the website of the U.S. embassy in Stockholm claimed in 2001 that those had been suggested by Pantone, and that the U.S. Government Printing Office preferred a different set. A third red was suggested by a California Military Department document in 2002. In 2001, the Texas legislature specified that the colors of the Texas flag should be "(1) the same colors used in the United States flag; and (2) defined as numbers 193 (red) and 281 (dark blue) of the Pantone Matching System."'
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
    this.bodyView.innerHTML = '<p>' + model.body.split("\n").join('</p><p>') + '</p>';
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