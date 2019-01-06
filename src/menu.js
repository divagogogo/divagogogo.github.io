export const menu = [{
  name: 'PHOTO',
  list: [{
    title: 'ORDER 序',
    to: '/photolist/order'
  }, {
    title: 'Just So . Still life',
    to: null
  }, {
    title: 'Half Moon',
    to: '/photoindex/photo/center/7'
  }, {
    title: '2017',
    to: '/photolist/2017'
  }]
}, {
  name: 'BOOK',
  list: [{
    title: 'Just so 如此',
    to: null
  }]
}, {
  name: 'ART',
  list: [{
    title: 'Five Elements',
    to: null
  }, {
    title: 'Zen',
    to: '/photolist/zen'
  }, {
    title: 'Book of Stephen Yas',
    to: null
  }, {
    title: 'VI. Cakenaire',
    to: '/photoindex/art/left/0'
  }, {
    title: 'VI. Socrate',
    to: '/photoindex/art/center/4'
  }, {
    title: 'VI. Blue Sense',
    to: '/photoindex/art/center/6'
  }, {
    title: 'Diva Collection',
    to: '/photoindex/art/center/1'
  }]
}, {
  name: 'PROJECT',
  list: [{
    title: 'Evian',
    to: null
  }, {
    title: 'Gore-Tex',
    to: null
  }, {
    title: 'Airbnb',
    to: '/photoindex/project/center/0'
  }, {
    title: 'Fendi BB',
    to: '/photoindex/project/right/0'
  }, {
    title: 'Oversea Love',
    to: '/photoindex/project/right/1'
  }]
}];


export const list = {
  order: {
    title: 'ORDER 序',
    desc: 'ORDER project is a new episode of my photo project in 2018. It is not about the what call youth culture, but the power of them, is what i wanna express. The project ORDER, is to discover the power of order around me. Those who seem silent, but have their own understand of the world, to enjoy life in their own ways.</br>Play with them, create with them, express with them. Their power of ORDER',
    sublist: {
      left: [{
        title: 'home or mall',
        to: '/photoindex/photo/left/0',
        cover: 'http://go.divagao.com/LA-U.jpg'
      }, {
        title: 'planet movement',
        to: '/photoindex/photo/center/1',
        cover: 'http://go.divagao.com/MA-S.jpg'
      }],
      center: [{
        title: 'child circle',
        to: '/photoindex/photo/right/0',
        cover: 'http://go.divagao.com/LA-W1.jpg'
      }, {
        title: 'mounting',
        to: '/photoindex/photo/left/1',
        cover: 'http://go.divagao.com/RA-V1.jpg'
      }],
      right: [{
        title: 'back to oval',
        to: '/photoindex/photo/center/0',
        cover: 'http://go.divagao.com/MA-R.jpg'
      }, {
        title: 'island',
        to: '/photoindex/photo/right/3',
        cover: 'http://go.divagao.com/RA-X.jpg'
      }]
    }
  },
  2017: {
    title: '2017',
    desc: 'Diva‘s work of 2017',
    sublist: {
      left: [{
        title: 'RYB',
        to: '/photoindex/photo/left/4',
        cover: 'http://go.divagao.com/LA-Y.jpg'
      }, {
        title: 'Abysmal',
        to: '/photoindex/photo/center/6',
        cover: 'http://go.divagao.com/MAA.jpg'
      }],
      center: [{
        title: 'Pinky cool',
        to: '/photoindex/photo/left/7',
        cover: 'http://go.divagao.com/LB.jpg'
      }, {
        title: 'B&W',
        to: '/photoindex/photo/center/4',
        cover: 'http://go.divagao.com/MA-Y.jpg'
      }, {
        title: 'no name',
        to: '/photoindex/photo/right/6',
        cover: 'http://go.divagao.com/RA.jpg'
      }],
      right: [{
        title: 'play',
        to: '/photoindex/photo/center/2',
        cover: 'http://go.divagao.com/MA-V1.jpg'
      }, {
        title: 'Tension',
        to: '/photoindex/photo/right/5',
        cover: 'http://go.divagao.com/RA-Z.jpg'
      }]
    }
  },
  zen: {
    title: 'Zen',
    desc: 'ZEN (禪) is a series of my art expression about lives and life.  </br> ZEN originally is a school of Mahayana Buddhism that originated in China during the Tang dynasty as Chan Buddhism. </br> What you can see from this series maybe a drawing, or maybe an effect made by Photoshop, without color. But all series creations are my own understand and thinking about those who struggle between peace and suffering, or maybe about nature.',
    sublist: {
      left: [{
        title: 'Wave',
        to: '/photoindex/art/left/3',
        cover: 'http://go.divagao.com/ALA-W.jpg'
      }, {
        title: '川',
        to: '/photoindex/art/left/5',
        cover: 'http://go.divagao.com/ALA-Y.jpg'
      }, {
        title: '山活',
        to: '/photoindex/art/center/3',
        cover: 'http://go.divagao.com/AMA-X.jpg'
      }, {
        title: '萬里',
        to: '/photoindex/art/right/0',
        cover: 'http://go.divagao.com/ARA-X.jpg'
      }],
      center: [{
        title: '潮',
        to: '/photoindex/art/left/1',
        cover: 'http://go.divagao.com/ALA-V.jpg'
      }, {
        title: '一目了然',
        to: '/photoindex/art/center/2',
        cover: 'http://go.divagao.com/AMA-U.jpg'
      }, {
        title: '根',
        to: '/photoindex/art/center/5',
        cover: 'http://go.divagao.com/AMA-Y.jpg'
      }, {
        title: '淨土',
        to: '/photoindex/art/right/3',
        cover: 'http://go.divagao.com/ARA-Y.jpg'
      }],
      right: [{
        title: '空門',
        to: '/photoindex/art/left/2',
        cover: 'http://go.divagao.com/ALA-X.jpg'
      }, {
        title: '川流',
        to: '/photoindex/art/center/0',
        cover: 'http://go.divagao.com/AMA-V.jpg'
      }, {
        title: '互',
        to: '/photoindex/art/right/5',
        cover: 'http://go.divagao.com/ARA-W.jpg'
      }]
    }
  }
};