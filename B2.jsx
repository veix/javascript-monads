'use strict'

import mobservable from 'mobservable';
import React from 'react';
import {render} from 'react-dom';
import {observer} from 'mobservable-react';
var EventEmitter = require("events");
var Monad = require('reactive-monads').Monad
var MonadObject = require('reactive-monads').MonadObject
var MonadArray = require('reactive-monads').MonadArray
var Markdown = require('react-remarkable');
export {B2};

class Component extends React.Component {
  constructor(props,x) {
    super(props);
    this.x = x
  }
  render = () => {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
          {this.x}
        `}
        </Markdown>
      </div>
    );
  }
};

let Component888 = new Component({cow: 99},42);

var Component1 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
					class Monad {
						constructor(z) {

							this.x = mobservable.makeReactive(z);

							this.bnd = (func, ...args) => {
								return func(this.x(),this, ...args);
							};

							this.ret = a => {
								this.x(a);
								return this;
							};
						}
					};
        `}
        </Markdown>
      </div>
    );
  }

});

var Component2 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
    ret(a).bnd(f)              = f(a)
    m.bnd(ret)                 = m
    m.bnd(x => f(x).bnd(g))    = m.bnd(f).bnd(g)
        `}
        </Markdown>
      </div>
    );
  }

});

var Component3 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
       class Monad {
         constructor(z) {
       
           this.x = mobservable.makeReactive(z);
       
           this.bnd = (func, ...args) => {
             return func(this.x(),this, ...args);
           };
       
           this.fmap = (func, ...args) => {
             return func(this, ...args);
           };
       
           this.id = () => {return this};
       
           this.ret = a => {
             this.x(a);
             return this;
           };
         }
       };
       
       class MonadObject {
         constructor(ob) {
       
           this.x = mobservable.makeReactive(ob);
       
           this.bnd = (func, ...args) => {
             return func(this.x, this, ...args);
           };
       
           this.fmap = (func, ...args) => {
             return func(this, ...args);
           };
       
           this.id = () => {return this};
       
           this.ret = w => {
             Object.assign(this.x, w);
             return this;
           }
         }
       }
       
       class MonadArray {
         constructor(z) {
       
           this.x = mobservable.makeReactive(z);
       
           this.bnd = (func, ...args) => {
             return func(this.x,this, ...args);
           };
       
           this.fmap = (func, ...args) => {
             return func(this, ...args);
           };
       
           this.id = () => {return this};
       
           this.ret = a => {
             this.x.replace(a);
             return this;
           };
         }
       };
        `}
        </Markdown>
      </div>
    );
  }

});


var Component4 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
	mAdd = (w,mn,z,mon) => { return mon.ret(w + z); }
        `}
        </Markdown>
      </div>
    );
  }

});


var Component5 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
    onClick={() => {m
    .bnd(this.reset_1)
    .bnd(this.reset_2)
    .bnd(this.reset_3)
    .bnd(this.pause, 0.6)
    .then(() => {m.ret(5)
      .bnd(this.pause, 0.6)
      .then(() => {m
        .bnd(mAdd,5,m2)
        .bnd(this.pause,0.6)
        .then(() => {m2
          .bnd(mAdd,5,m3)  }) }) }) }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component6 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
         fmap = (func,mon, ...args) => {
           return func(mon, ...args)
         }
        `}
        </Markdown>
      </div>
    );
  }

});

var Component7 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
      onClick={() => {mo1
        .ret({a: 8, b: 9, c: 10})
        .bnd(() => {return mo2
          .ret({a: 11, b: 12, c: 13})})
          .bnd(() => {return mo3
            .ret({a: 14, b: 'two', c: 'three'})}) }}
        `}
        </Markdown>
      </div>
    );
  }

});


var Component8 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 22 }} >
        <Markdown>
        {`
    onClick={() => {m
    .bnd(this.reset_1)
    .bnd(this.reset_2)
    .bnd(this.reset_3)
    .bnd(this.pause, 0.6)
    .then(() => {m.ret(5)
      .bnd(this.pause, 0.6)
      .then(() => {m
        .bnd(mAdd,5,m2)
        .bnd(this.pause,0.6)
        .then(() => {m
          .bnd(mAdd,5,m3)  }) }) }) }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component9 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
m.ret(23).bnd(x => {(m2.ret(19)).bnd(y => m3.ret(x + y))})
        `}
        </Markdown>
      </div>
    );
  }

});

var Component10 = React.createClass({

  render: function() {
    return (
      <div style={{ fontSize: 20, color: 'lightblue', borderColor: 'darkgreen' }} >
        <Markdown>
        {`
            onClick={() => {m2
              .ret(1)
              .bnd(this.tripple)
              .bnd(this.cube)
            }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component11 = React.createClass({

  render: function() {
    return (
      <div style={{ fontSize: 20, color: 'lightblue', borderColor: 'darkgreen' }} >
        <Markdown>
        {`
          onClick={() => {m
            .ret(1)
            .bnd((a) => {this.tripple(a, m)
            .bnd(this.cube)
            })  
          }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component12 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
          obDouble = x => {
            for (let o in x) {
              x[o] = x[o] + x[o];
            }
            return new MonadObject(x);
          }
        `}
        </Markdown>
      </div>
    );
  }

});

var Component13 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
	onClick={() => {mo3
    .ret({a: 0, b: 0, c: 0}).bnd(mo2.ret).bnd(mo1.ret)
        .bnd(this.pause, 0.6)
        .then(() => {mo1
          .ret({a: 3, b: 3, c: 3})
          .bnd(this.pause, 0.6)
          .then(() => {mo1
              .bnd(mo2.ret)
              .bnd(this.obCube)
              .bnd(this.pause, 0.6)
              .then(() => {mo3
                  .ret({a: 21, b: 'b', c: 'c'})
                  .bnd(this.pause, 0.6)
                  .then(() => {mo3
                      .bnd(this.obDouble) }) }) }) }) }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component14 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
this.obDouble({a:2,b:4,c:6}).bnd(mo1.ret)
        `}
        </Markdown>
      </div>
    );
  }

});

var Component15 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
    onClick={() => {mo1
         .ret({a: 'one', b: 'two', c: 'three'})

         .bnd(mo2.ret)
         .ret({a: 'four', b: 'five', c: 'six'})

         .bnd(mo3.id)
         .ret({a: 'SEVEN', b: 'two', c: 'three'})  }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component16 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue' }} >
        <Markdown>
          {`
  onClick = {() { this.fmap(this.obDouble, mo1) }}
        `}
        </Markdown>
      </div>
    );
  }

});

var Component17 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue' }} >
        <Markdown>
        {`
  double = (x,mon) => { return mon.ret(x+x) };

  square = (x,mon) => { return mon.ret(x*x) };

  tripple = (x,mon) => { return mon.ret(x+x+x) };

  cube = (x,mon) => { return mon.ret(x*x*x) };
        `}
        </Markdown>
      </div>
    );
  }

});

var Component18 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
		pause = ( z, t ) => {
			return new Promise(function (resolve, reject) {
				setTimeout(resolve, t*1000);
		})};
        `}
        </Markdown>
      </div>
    );
  }

});

var Component19 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
      mult10_Calc = ([a,b,c]) => {
        return ma2.ret([a*10,b*10,c*10]);
      }
        `}
          </Markdown>
        </div>
      );
    }

  });

var Component20 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
mo2.ret({a:2,b:4,c:6}).bnd(this.obDouble)
        `}
          </Markdown>
        </div>
      );
    }

  });

var Component21 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20}} >
        <Markdown>
        {`
  add1_mult10_Calc = x => {
    let d = this.add1Calc(x);
    return d.bnd(mult10_Calc);
  }

        `}
          </Markdown>
        </div>
      );
    }

  });


var Component22 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
      onClick={() => {new Monad(3)
      .bnd(this.double)
      .bnd(this.tripple)
      .bnd(m2.ret)  }}
        `}
          </Markdown>
        </div>
      );
    }

  });


var Component23 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
      onClick={() => {m2
      .ret(3)            // reset to '3' for demonstration purposes.
      .bnd(this.double)
      .bnd(this.tripple)
        `}
          </Markdown>
        </div>
      );
    }

  });


var Component24 = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
    onClick={() => {new Monad(1)
      .bnd(this.double)
      .bnd(this.tripple)
      .bnd(this.cube)
      .bnd(this.square)
      .bnd(m.ret)
    }}
        `}
          </Markdown>
        </div>
      );
    }

  });



var Component25 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
    onClick={() => {m
      .ret(1)
      .bnd(this.double)
      .bnd(m2.ret)
      .bnd(this.tripple)
      .bnd(m3.ret)
      .bnd(this.cube)
      .bnd(m4.ret)
      .bnd(this.square)
    }}
        `}
          </Markdown>
        </div>
      );
    }
  });

var Component26 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
  doubleM = (x,m) => { return m.ret(x+x) };

  squareM = (x,m) => { return m.ret(x*x) };

  trippleM = (x,m) => { return m.ret(x+x+x) };

  cubeM = (x,m) => { return m.ret(x*x*x) };
        `}
          </Markdown>
        </div>
      );
    }
  });

var Component27 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
         onClick={() => {mo1
         .fmap(this.obDoubleF)
         .bnd(mo2.ret)
         .bnd(this.obTripple) }}
        `}
          </Markdown>
        </div>
      );
    }
  });

var Component28 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
         obDoubleF = (mon) => {
           for (let j in mon.x) {
             mon.x[j] = 2*mon.x[j];
           }
           return mon;
         }
        `}
          </Markdown>
        </div>
      );
    }
  });

var Component29 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
          {`
  double = x => { return new Monad(x+x)
        `}
          </Markdown>
        </div>
      );
    }
  });

var Component30 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
        `}
          </Markdown>
        </div>
      );
    }
  });

var ComponentPause = React.createClass({

  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
    onClick={() => {mo3
      .ret({a: 0, b: 0, c: 0}).bnd(mo2.ret).bnd(mo1.ret)
      .fmap((mon) => setTimeout(() => {return mon
          .bnd(() => {mo1
          .ret({a: 3, b: 3, c: 3})
          .fmap((mon) => setTimeout(() => {return mon
              .bnd(mo2.ret)
              .bnd(this.obCube)
              .fmap((mon) => setTimeout(() => {return mon
                  .bnd(() => {mo3
                  .ret({a: 21, b: 'b', c: 'c'})
                  .fmap((mon) => setTimeout(() => {return mon
                      .bnd(this.obDouble) 
                  },600 ))
                  })
              },600 ))
          },600 ))
          })
       },600 ))
    }}
        `}
          </Markdown>
        </div>
      );
    }
});

var ComponentPromiseM = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
  cubeP = (mon) => {
    let z = mon.x();
    mon.ret(z*z*z);
    return mon;
  }

  squareP = (mon) => {
    let z = mon.x();
    mon.ret(z*z);
    return mon;
  }

  idP = (mon) => {
    return mon;
  }

  promiseM = ( mon, func ) => {
      return new Promise(function (resolve, reject) {
        if (typeof func(mon).x() === 'number') {
          console.log("In promiseM ", mon.x());
          resolve
        }
        else console.log("ERROR typeof func(mon).x() is not a number. " + typeof func(mon).x); 
      })
  };
        `}
          </Markdown>
        </div>
      );
    }
  });


var ComponentPromises = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: 'lightblue'}} >
        <Markdown>
        {`
          onClick={() => {m3
            .ret(1)
            .fmap(this.promiseM, this.idP)
            .then(m
            .ret(1.5)
            .fmap((mon) => setTimeout(() => {return mon
            .bnd(this.double)
            .fmap((mon) => setTimeout(() => {return mon
            .bnd(m2.ret)
            .fmap(this.promiseM, this.squareP)
            .then(m3
            .fmap(this.promiseM, this.cubeP)
            .then(m
            .fmap((mon) => setTimeout(() => {return mon
            .bnd(m3.ret)
            .fmap((mon) => setTimeout(() => {return mon
            .fmap(this.promiseM, this.cubeP)
  
            },1000 ))   },1000 )) ))  },1000 )) },1000 )) )  }}
        `}
          </Markdown>
        </div>
      );
    }
  });


let colorObject = {
    27: '#000',
    270: 'darkred',
    28: 'burlywood',
    37: '#000',
    370: 'darkred',
    38: 'burlywood',
    47: '#000',
    470: 'darkred',
    48: 'burlywood',
    57: '#000',
    570: 'darkred',
    58: 'burlywood',
    67: '#000',
    670: 'darkred',
    68: 'burlywood',
    77: '#000',
    770: 'darkred',
    78: 'burlywood',
    87: '#000',
    870: 'darkred',
    88: 'burlywood',
    97: '#000',
    970: 'darkred',
    98: 'burlywood',
    107: '#000',
    1070: 'darkred',
    108: 'burlywood',
    117: '#000',
    1170: 'darkred',
    118: 'burlywood',
    127: '#000',
    1270: 'darkred',
    128: 'burlywood',
    137: '#000',
    1370: 'darkred',
    138: 'burlywood',
    0: '000',
    1: '000',
    2: '000',
    3: '000',
    4: '000',
    5: '000',
    6: '000',
    7: '000',
    8: '000',
    9: '000',
    10: 'darkred',
    11: 'darkred',
    12: 'darkred',
    13: 'darkred',
    14: 'darkred',
    15: 'darkred',
    16: 'darkred',
    17: 'darkred',
    18: 'darkred',
    19: 'darkred',
    100: 'burlywood',
    101: 'burlywood',
    102: 'burlywood',
    103: 'burlywood',
    104: 'burlywood',
    105: 'burlywood',
    106: 'burlywood',
    107: 'burlywood',
    108: 'burlywood',
    109: 'burlywood',
    title: ''
};

let fibData = {
  a: 1,
  b: 1,
  m3: new Monad(1)
};

fibData.m3.x.observe(function(m,k) {
  fibData.a = m;
  fibData.b = k;
});

let m = new Monad(1);
let m2 = new Monad(3);
let m4 = new Monad(1);

const MA = new MonadArray(
   [
      [ 'find a clean mug', true ],

       [ 'make coffee', false ]
    ]
);

let completed = () => { return (MA.x.filter(y => y[1]).length)  }

var styles = mobservable.observable({
style3: {backgroundcolor: 'green', textalign: 'left', bordercolor: 'lightblue', outline: 0,
    color: 'black', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 0, fontSize: 22 },
style2: {backgroundColor: '#000', textalign: 'left', borderColor: 'darkred', outline: 0,
    color: 'burlywood', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 },
style1: {backgroundColor: 'blue', textalign: 'left', borderColor: 'lightblue', outline: 0,
    color: 'yellow', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 },
style4: {backgroundColor: '#000', textalign: 'left', borderColor: 'darkred', outline: 0,
    color: 'lightblue', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 0, fontSize: 22 },
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    39: false,
    49: false,
    color0: function () {let b = this[0]; return (b ? this.style1 : this.style2)},
    color1: function () {let b = this[1]; return (b ? this.style1 : this.style2)},
    color2: function () {let b = this[2]; return (b ? this.style1 : this.style2)},
    color3: function () {let b = this[3]; return (b ? this.style1 : this.style2)},
    color4: function () {let b = this[4]; return (b ? this.style1 : this.style2)},
    color5: function () {let b = this[5]; return (b ? this.style1 : this.style2)},
    color6: function () {let b = this[6]; return (b ? this.style1 : this.style2)},
    color7: function () {let b = this[7]; return (b ? this.style1 : this.style2)},
    color8: function () {let b = this[8]; return (b ? this.style1 : this.style2)},
    color9: function () {let b = this[9]; return (b ? this.style1 : this.style2)},
    color10: function () {let b = this[10]; return (b ? this.style1 : this.style2)},
    color11: function () {let b = this[11]; return (b ? this.style1 : this.style2)},
    color12: function () {let b = this[12]; return (b ? this.style1 : this.style2)},
    color13: function () {let b = this[13]; return (b ? this.style1 : this.style2)},
    color14: function () {let b = this[14]; return (b ? this.style1 : this.style2)},
    color15: function () {let b = this[15]; return (b ? this.style1 : this.style2)},
    color16: function () {let b = this[16]; return (b ? this.style1 : this.style2)},
    color17: function () {let b = this[17]; return (b ? this.style1 : this.style2)},
    color18: function () {let b = this[18]; return (b ? this.style1 : this.style2)},
    color19: function () {let b = this[19]; return (b ? this.style1 : this.style2)},
    color20: function () {let b = this[20]; return (b ? this.style1 : this.style2)},
    color21: function () {let b = this[21]; return (b ? this.style1 : this.style2)},
    color22: function () {let b = this[22]; return (b ? this.style1 : this.style2)},
    color23: function () {let b = this[23]; return (b ? this.style1 : this.style2)},
    color24: function () {let b = this[24]; return (b ? this.style1 : this.style2)},
    color25: function () {let b = this[25]; return (b ? this.style1 : this.style2)},
    color26: function () {let b = this[26]; return (b ? this.style1 : this.style2)},
    color27: function () {let b = this[27]; return (b ? this.style1 : this.style2)},
    color28: function () {let b = this[28]; return (b ? this.style1 : this.style2)},
    color29: function () {let b = this[29]; return (b ? this.style1 : this.style2)},
    color39: function () {let b = this[39]; return (b ? this.style3 : this.style4)},
    color49: function () {let b = this[49]; return (b ? this.style3 : this.style4)}
});

const M2 = new MonadObject(styles.style1);
console.log(M2.x);


let styleM = (mon,x,y,z) => { return mon.ret({backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20  } ) };

let style1 = (x,y,z) => {return {backgroundcolor: x, textalign: 'left', bordercolor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

let style2 = (x,y,z) => {return {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkblue', outline: 0,
    color: 'red', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 27 }};

let addTask = (mon,t) => {
      mon.x.push([t,false])
      let j = mon.x.length - 1;
      if (mon.x[j][0] === null) {
        mon.x.splice(j, 1);
      }
      return mon;
}

let removeTask = (mon,t) => {
      let l = mon.x.length;
      let k;
      for (k=0;k<l;k+=1) {
        let task = mon.x[k][0];
        if (mon.x[k][0] === t) {
          mon.x.splice(k, 1);
          return mon;
        }
      }
      mon.x.push(['Error in removeTask']);
      return mon;
}

let toggleComplete = (mon,t) => {
      let l = mon.x.length;
      let k;
      for (k=0;k<l;k+=1) {
        if ( mon.x[k][0] === t) {
          mon.x[k][1] = !mon.x[k][1];
        }
      }
      return mon;
}

var displayTodos = function () {
  let ar = [];
  let l = MA.x.length;
  for (let k=0;k<l;k+=1) {
    ar.push(
    <div>
      <div style={{fontSize: 28, color: 'lightblue' }} > {MA.x[k][0]} </div>

      <button style={ styles['color'+k] } 

        onClick={() => {MA.fmap(removeTask, MA.x[k][0]) }} 
  onMouseEnter={() => {styles[k] = true } }
  onMouseLeave={() => {styles[k] = false } }  >
    remove
  </button>
  <button  style={styles['color'+(k+9)] }
    onClick={() => {MA.x[k][0] = prompt('Todo:', 'Take a walk') }}
  onMouseEnter={() => {styles[k+9] = true } }
  onMouseLeave={() => {styles[k+9] = false } }  >
        edit 
      </button>
  <button  style={styles['color'+(k+18)]}
    onClick={() => {MA.fmap(toggleComplete, MA.x[k][0]) }}
  onMouseEnter={() => {styles[k+18] = true } }
  onMouseLeave={() => {styles[k+18] = false } }  >
        completed:  <input type='checkbox' checked={MA.x[k][1]} 
          style={{width: 18, height: 18}} ></input>
  </button>
  <br /><br />
    </div> ) }
    ar.push( <button  style={styles['color39']}
      onClick={() => { let t = prompt('New task: ', 'smell the roses');
        styles[39] = false;
        MA.fmap(addTask, t);
      }}
  onMouseEnter={() => {styles[39] = true } }
  onMouseLeave={() => {styles[39] = false } }  > 
      new todo 
    </button> )
    ar.push( <div style={{color: 'lawngreen', fontSize: 24 }}> {completed()} of {l} completed. </div> )
    return ar;
};



@observer class Display extends React.Component {
    render() {
let display = displayTodos();
return( <div> {display} </div> )
    }
};

let data = mobservable.observable({

  obDouble: function (x,mon) {
    for (let o in x) {
      mon.x[o] = x[o] + x[o];
    }
    return mon;
  },

  obTripple: function (x,mon) {
    for (let c in x) {
      mon.x[c] = 3*x[c];
    }
    return mon;
  },

  obCube: function (x,mon) {
    for (let o in x) {
      mon.x[o] = x[o]*x[o]*x[o];
    }
     return mon;
  }

});

// var worker = new Worker('helper.js');
// worker.postMessage(t);

// let ma4 = new MonadArray([10,20,30]);
// let source = Stream(ma4);

@observer class B2 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        content: null,
        content2: null,
        content3: null,
        display: 'inline'
      };

class M {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.fmap = (func, ...args) => {
        return func(this, ...args);
      };

      this.id = () => {return this};

      this.ret = a => {
        this.x = a;
        return this;
      };
    }
  }

  class MObject {
    constructor(ob) {

      this.x = ob;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.fmap = (func, ...args) => {
        return func(this, ...args);
      };

      this.id = () => {return this};

      this.ret = w => {
        Object.assign(this.x, w);
        return this;
      }
    }
  }

  class MArray {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x,this, ...args);
      };

      this.fmap = (func, ...args) => {
        return func(this, ...args);
      };

      this.id = () => {return this};

      this.ret = a => {
        this.x = a;
        return this;
      };
    }
  }

    this.mM1 = new M(3);
    this.mM2 = new M(3);
    this.mM3 = new M(3);
    this.mM4 = new M(3);
    this.mous = colorObject;
    this.fibData = fibData;
    this.data = data;
    this.obDouble = data.obDouble;
    this.obTripple = data.obTripple;
    this.obCube = data.obCube;
    this.m = m;
    this.m2 = m2;
    this.m4 = m4;
    this.ma1 = new MonadArray([1,1,3]);
    this.ma2 = new MonadArray([3,3,3]);
    this.mo1 = new MonadObject({a: 1, b: 2, c: 3});
    this.mo2 = new MonadObject({a: 3, b: 5, c: 42});
    this.mo3 = new MonadObject({a: 'Waiting', b: 'b', c: 'c'});
    this.m3 = fibData.m3;
    this.ax = () => {m.x.observe(function(a,b) {return a})};
    this.bx = () => {m.x.observe(function(a,b) {return b})};
    this.a = () => {return this.ax()};
    this.b = this.bx();
    this.M2 = M2;
    this.pending = 0;
    this.completed = completed;
    this.style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: 0,
    color: 'burlywood', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
    marginLeft: 12, fontSize: 22 };
    this.style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: 0,
    color: 'yellow', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
    marginLeft: 12, fontSize: 22 };
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
    this.bool4 = false;
  }

  cT1 = () => {
    let self = this;
    this.bool1 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF1 = () => {
    let self = this;
    this.bool1 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT2 = () => {
    let self = this;
    this.bool2 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF2 = () => {
    let self = this;
    this.bool2 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT3 = () => {
    let self = this;
    this.bool3 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF3 = () => {
    let self = this;
    this.bool3 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT4 = () => {
    let self = this;
    this.bool4 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF4 = () => {
    let self = this;
    this.bool4 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };


cubeQ = (mon) => {
  let z = mon.x;
  mon.ret(z*z*z);
  return mon;
}

squareQ = (mon) => {
  let z = mon.x;
  mon.ret(z*z);
  return mon;
}

idQ = (mon) => {
  let self = this;
  setTimeout(function() {
    self.forceUpdate();
  },4 );
  return mon;
}

incQ = (mon,z) => {
  let w = mon.x;
  mon.ret(z+w);
  return mon;
}

addQ = (mon,mon2) => {
  let w = mon.x;
  let z = mon2.x;
  mon.ret(z+w);
  return mon;
}

  sq = x => {x*x};

  fibo = x => { this.m3.x(this.fibData.a + this.fibData.b) }

  fibCalc = ([a,b,c]) => {
    let d = [a+b,a,42];
    return this.ma1.ret(d);
  }

  add1Calc = ([a,b,c]) => {
    return this.ma2.ret([a+1,b+1,c+1]);
  }

  mult10_Calc = ([a,b,c]) => {
    return this.ma2.ret([a*10,b*10,c*10]);
  }

  add1_mult10_Calc = x => {
    let d = this.add1Calc(x);
    return d.bnd(this.mult10_Calc);
  }

  obDoubleF = (mon) => {
    for (let j in mon.x) {
      mon.x[j] = 2*mon.x[j];
    }
    return mon;
  }

  obTrippleF = (x,mon) => {
    for (let c in x) {
      mon.x[c] = 3*x[c];
    }
    return mon;
  }

  obCubeF = (x,mon) => {
    for (let o in x) {
      mon.x[o] = x[o]*x[o]*x[o];
    }
     return mon;
  }


  obReplace = (x,mon,y) => {
    for (let e in y) {
      mon.x[e] = y[e];
    }
    return mon;
  }

  obSixTimes = x => {
    let monadObject = this.obTripple(x);
    monadObject.bnd(this.obDouble);
    return monadObject;
  }


  fDouble = (x,mon) => {return mon.ret(x+x)};


  // double = x => { return new Monad(x+x) };

  // square = x => { return new Monad(x*x) };

  // tripple = x => { return new Monad(x+x+x) };

  // cube = x => { return new Monad(x*x*x) };

  plus1 = x => { return new Monad(x+1) };


  doubleM = (x,mon,m) => { return m.ret(x+x) };

  squareM = (x,mon,m) => { return m.ret(x*x) };

  trippleM = (x,mon,m) => { return m.ret(x+x+x) };

  cubeM = (x,mon,m) => { return m.ret(x*x*x) };


  double = (x,mon) => { return mon.ret(x+x) };

  square = (x,mon) => { return mon.ret(x*x) };

  tripple = (x,mon) => { return mon.ret(x+x+x) };

  cube = (x,mon) => { return mon.ret(x*x*x) };

  cubeF = (mon) => { 
    let z = mon.x();
    let r = z*z*z;
    mon.ret(r);
    return mon;
  }

  mAdd = (w,mn,z,mon) => { return mon.ret(w + z); }

  fmSubtract1 = w => {
    return m.ret(w-1);
  }

  fmSquare = w => {
    return m.ret(w*w);
  }

  identity = w => {
    m.ret(w);
  }

  pause = ( z, mon, t ) => {
      return new Promise(function (resolve, reject) {
          setTimeout(resolve, t*1000);
      });
  }

  timeout = (t) => {setTimeout(resolve, t*1000)};

  cubeP = (mon) => {
    let z = mon.x();
    mon.ret(z*z*z);
    return mon;
  }

  squareP = (mon) => {
    let z = mon.x();
    mon.ret(z*z);
    return mon;
  }

  idP = (mon) => {
    return mon;
  }

  promiseM = ( mon, func ) => {
      return new Promise(function (resolve, reject) {
        if (typeof func(mon).x() === 'number') {
          console.log("In promiseM ", mon.x());
          resolve
        }
        else console.log("ERROR typeof func(mon).x() is not a number. " + typeof func(mon).x); 
      })
  };

  fmAdd_then_Square = w => {
    return this.m.ret((w+1)*(w+1));
  };

  reset_1 = () => {
    return this.m.ret(1);
  }

  reset_2 = () => {
    return this.m2.ret(3);
  }

  reset_3 = () => {
    this.m3.x(1);
    this.fibData.a = 1;
    this.fibData.b = 1;
    return new Monad(1);
  }

  style7 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 0, fontSize: 22 }};

  style8 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

  style9 = (x,y,z) => {return {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkblue', outline: 0,
    color: 'red', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 27 }};

  // style9 = (w,x,y,z) => {return {display: w, backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
  // color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

  rand = (a,b) => {
      return Math.floor(Math.random() * (a - b)) + b;
  }

  randM = (x) => {
    let r = this.rand(1,5);
    return this.m.ret(r);
  }

  pair = (x) => {
    let r = this.rand(1,5);
    this.m2.ret(r);
    if ( r === this.m.x() ) {
      return this.m3.ret('pair. Try again');
    }
    return this.m3.ret('zilch. Try again');
  }

  three = x => {
    let r = this.rand(1,5);
    if ( r === this.m.x() && r === this.m2.x() ) {
      this.m3.ret(r);
      return this.m4.ret('Winner! Three of a kind');
    }
    if ( r === this.m.x() || r === this.m2.x() ) {
      this.m4.ret(r);
      return this.m3.ret('pair. Try for three.');
    }
    return this.m4.ret(r);
  }

  pause2(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
  } 

  fmap = (func,mon, ...args) => {
    return func(mon, ...args)
  }


    render = () => {
    let mM1 = this.mM1;
    let M2 = this.M2;
    let m2 = this.m2;
    let m3 = this.m3;
    let m4 = this.m4;
    let mouse = this.mouse;
    let mous = this.mous;
    let mo1 = this.mo1;
    let mo2 = this.mo2;
    let mo3 = this.mo3;
    let ma1 = this.ma1;
    let ma2 = this.ma2;
    let mAdd = this.mAdd;
    let mult10_Calc = this.mult10_Calc;
    return (
      <div style={{ backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: 22 }}>
        <br /><br />


<div style={{ width: '30%', fontSize: 22, position: 'fixed', top: 200, right: 5}}  >
   <span> Monad mo1 <button style={this.style9('blue','lightblue','yellow')} >{mo1.x.a}, {mo1.x.b}, {mo1.x.c}</button> </span> <br />
   <span> Monad mo2 <button style={this.style9('blue','lightblue','yellow')} >{mo2.x.a}, {mo2.x.b}, {mo2.x.c}</button> </span> <br />
   <span> Monad mo3 <button style={this.style9('blue','lightblue','yellow')} >{mo3.x.a}</button> </span> <br />


   <span> Monad mM1: <button  style={this.style9('blue','lightblue','yellow')} >{mM1.x}</button> </span> <br />
   <span> Monad m: <button  style={this.style9('blue','lightblue','yellow')} >{m.x()}</button> </span> <br />
   <span> Monad m2: <button style={this.style9('blue','lightblue','yellow')} >{m2.x()}</button> </span> <br />
   <span> Monad m3: <button style={this.style9('blue','lightblue','yellow')} >{m3.x()}</button> </span> <br />
   <span> Monad m4: <button style={this.style9('blue','lightblue','yellow')} >{m4.x()}</button> </span> <br />
   <span> Monad ma1 <button style={this.style9('blue','lightblue','yellow')} >{ma1.x[0]}, {ma1.x[1]}, {ma1.x[2]}</button> </span> <br />
   <span> Monad ma2 <button style={this.style9('blue','lightblue','yellow')} >{ma2.x[0]}, {ma2.x[1]}, {ma2.x[2]}</button> </span> <br />
 </div>
      <br /><br /> <br /><br />
      <button style={this.bool1 ? this.style1 : this.style2 } 
   onClick={() => {m.bnd(this.randM)
     .bnd(this.pair)
     .bnd(this.three)}}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
        >
   TEST 1
      </button>
      <br /><br />

      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM1.ret(10).fmap(this.cubeQ).fmap(this.idQ)  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
   TEST 2
      </button>
      <br /><br />
  <div style={{ width: '65%', textAlign: 'left', marginLeft: 40, marginRight: 40, fontSize: 20 }} >

<h1 style={{textAlign: 'center'}} >Mobservable Monads</h1>


<Display />



 <p>This demonstration does not contain formal proofs. It does show, among other things, that these little inventions obey the monad laws. The "return" function is the left and right identity function, and the evaluation of linked "bind" methods gives the same result regardless of how you group the evaluations. That's a good sign that they are mathematical monads, but this isn't about category theory. The significance of adherence to the monad laws is that these entities will be versitile, predictable, modular, composable, and maintainable. Here's the code: </p>

<Component3 />
<p>And here are the monad laws: For all monads 'm' with value type 'v' (primitive, object, or array) and for all functions f and g mapping values of any type v to monads of type v, the folling three equalities are true: </p>
<Component2 />
<p>Both sides of the equation on the third line show 'm' ending up with the value g(f(v)) where 'v' is the original value of m.
  In this section, we work with monads whose 'bnd' method maps objects to MonadObject instances. If m is an instance of MonadObject with value a, then m.bnd(f,this, ...args) returns 'm' with the value 'f(a,this, ...args)', where 'this' is the monad calling 'bnd' ('m' in this case), and 'args' are optional arguments. </p>

    <h3 style={{textAlign: 'center'}} >'ret' is the left and right identity element</h3>
   The first two laws are known as the left and right identity laws respectively. We demonstrate it here with the function 'obDouble', which is defined as: <br /><Component12 />
  <p>It works with monads or, as shown here, as a stand-alone function which takes an object as an argument and returns a MonadObject instace with each property doubled.</p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
    onClick={() => {this.obDouble({a:2,b:4,c:6}, mo1) }}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
<Component14 />
      </button>
          <p>As illustrated in more detail later in this section, ".bnd(this.obDouble) places the value of the monad that calls 'bnd' in the monad that calls 'ret'. We do it here in order to put the result in 'mo1' for display. The point here is to show that 'obDouble' takes an object as an argument and returns an instance of MonadObject. Next we demonstrate calling 'obDouble' on the value of a monad which uses its 'bnd' method to call 'ofDouble'.      </p>
<p>The left identity property of monads is 'ret(x).bind(f) = f(x)' so, we can illustrate the left identity feature of ObjectMonad by executing:</p>
<br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
  onClick={() => {mo2.ret({a:2,b:4,c:6}).bnd(this.obDouble)}}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
<Component20 />
          </button>
          <p>As shown in the right column, both ways of providing an argument to 'obDouble' yield the same result. The left identity law holds in this case and, I postulate, in all other cases.  </p>


            <p> The right identity law is 'monad.bind(return) = monad'. Here we test right identity on 'mo2':  </p>
      <button style={this.bool1 ? this.style1 : this.style2 } 
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            >
            mo2.bnd(mo2.ret)
          </button>
          <p>As expected, 'mo2' doesn't change, no matter what its value happens to be.  </p>

<h3 style={{textAlign: 'center'}} >Demonstration of the Associative Property</h3>
<p> The associative law is "m.bnd(x => f(x).bnd(g)) = m.bnd(f).bnd(g)". We demonstrate the associative law by calling 'mo1.bnd' on the composite of  'obTripple' and 'obDouble' and then calling 'mo2.bind' on the functions sequentially.</p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
            onClick={() => {mo1.bnd(x => this.obTripple(x,mo1).bnd(this.obDouble))}}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
  > mo1.bnd(x => this.obTripple(x).bnd(this.obDouble)
</button>
          <br /><br />
      <button style={this.bool3 ? this.style1 : this.style2 } 
            onClick={() => {mo2.bnd(this.obTripple).bnd(this.obDouble)}}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
  > mo2.bnd(this.obTripple).bnd(this.obDouble)
</button>
<br /><br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
  onClick={() => {mo1.ret({a: 1, b: 2, c: 3}).bnd(mo2.ret)}}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
            Click to re-set 'mo1' and 'mo2'
          </button>
          <p>'bnd' is a function whose arguments must start with a function, and which can accept additional optional arguments. The function operates on the calling monad's value, 'this' referring to the calling monad, and possibly other arguments which were provided to 'bnd'. The types of the arguments accepted by 'ret' must be the same type as the value of the monad which calls 'ret'. If monad 'm' calls '.bnd(m2.ret)' for some other monad 'm2', 'm2.ret' operates on the value of 'm' (which is m.x), giving 'm2' that same value. 'm2.ret' returns the monad 'm2', therefore a subsequent '.ret(arg)' call will cause 'm2' to have the value 'arg'. </p>
          <p> The third line below illustrates the use of 'ret' to change the calling monad to 'mo2'. A more efficient method is used in line '5'. The method 'id' changes the calling function to 'mo3' without the unnecessary overhead of giving it the value of another monad. Here is the clickable code:  </p>
      <button style={this.bool1 ? this.style1 : this.style2 } 
  onClick={() => {mo1
  .ret({a: 'one', b: 'two', c: 'three'})
  .bnd(mo2.ret)
  .ret({a: 'four', b: 'five', c: 'six'})
  .bnd(mo3.id)
  .ret({a: 'SEVEN', b: 'two', c: 'three'})  }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }

          >
          <Component15 />
</button>
<p>The following code demonstrates an alternative way of changing the calling monad:  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
  onClick={() => {mo1
  .ret({a: 8, b: 9, c: 10})
  .bnd(() => {return mo2
    .ret({a: 11, b: 12, c: 13})})
    .bnd(() => {return mo3
      .ret({a: 14, b: 'two', c: 'three'})})  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }

            >
            <Component7 />
</button>



<p>  Here is the code for pause:  </p>
<Component18 />
          <p>And here is the example:</p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
  onClick={() => {mo3
    .ret({a: 0, b: 0, c: 0}).bnd(mo2.ret).bnd(mo1.ret)
    .bnd(this.pause, 0.6)
    .then(() => {mo1
    .ret({a: 3, b: 3, c: 3})
      .bnd(this.pause, 0.6)
      .then(() => {mo1
        .bnd(mo2
        .ret)
        .bnd(this.obCube)
        .bnd(this.pause, 0.6)
        .then(() => {mo3
          .ret({a: 21, b: 'b', c: 'c'})
          .bnd(this.pause, 0.6)
          .then(() => {mo3
              .bnd(this.obDouble) }) }) }) }) }}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            >
<Component13 />
          </button>

          <p>But we don't need to use Promises in order to cause pauses after the computations. setTimeout is all we need.</p>
      <button style={this.bool4 ? this.style1 : this.style2 } 
  onClick={() => {mo3
    .ret({a: 0, b: 0, c: 0}).bnd(mo2.ret).bnd(mo1.ret)

    .fmap((mon) => setTimeout(() => {return mon
    .bnd(() => {mo1
      .ret({a: 3, b: 3, c: 3})

        .fmap((mon) => setTimeout(() => {return mon
        .bnd(mo2
          .ret)
          .bnd(this.obCube)

            .fmap((mon) => setTimeout(() => {return mon
            .bnd(() => {mo3
              .ret({a: 21, b: 'b', c: 'c'})

                .fmap((mon) => setTimeout(() => {return mon
                  .bnd(this.obDouble) 
                },600 ))
                })
            },600 ))
        },600 ))
        })
     },600 ))
  }}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
      <ComponentPause />
</button>
<p>But ES6 promises can be very useful. Here is an example of blending them into a chain of monadic computation: </p>

      <button style={this.bool1 ? this.style1 : this.style2 } 
        onClick={() => {m3
          .ret(1)
          .fmap(this.promiseM, this.idP)
          .then(m
          .ret(1.5)
          .fmap((mon) => setTimeout(() => {return mon
          .bnd(this.double)
          .fmap((mon) => setTimeout(() => {return mon
          .bnd(m2.ret)
          .fmap(this.promiseM, this.squareP)
          .then(m3
          .fmap(this.promiseM, this.cubeP)
          .then(m
          .fmap((mon) => setTimeout(() => {return mon
          .bnd(m3.ret)
          .fmap((mon) => setTimeout(() => {return mon
          .fmap(this.promiseM, this.cubeP)

          },1000 ))   },1000 )) ))  },1000 )) },1000 )) )  }}

   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
   >
   <ComponentPromises />
 </button>
 <p>Here's are the methods we used: </p>
 <ComponentPromiseM />


  <h3 style={{textAlign: 'center' }} >fmap - The Function and the Monad Method</h3>
  <p> 'bnd(f)' takes a value of type primitive, object, or array and returns a monad of the corresponding type. 'fmap(m)' takes a monad as an argument and returns a monad. 'Monad', 'MonadObject', and 'MonadArray' have built-in fmap methods. These make chaining convenient. There is also a stand-alone function 'fmap'. Both take the same functions as arguments.  </p>
  <p>While 'fmap' can behave like a traditional map or fmap, changing the values contained in monads while leaving the monads intact, the 'fmap' defined here can also do other things. Having complete access to the monad provided as an argument to the function, and complete access to the monad which calls the method 'fmap', the fmap defined in this project can do anything that 'bnd' can do, such as perform operations involving multiple monads..  </p>
  <p>The function 'fmap' is defined as follows: </p>
  <Component6 />
  <p>The following two buttons demonstrate that the function 'obDoubleF' works as an argument for the function 'fmap' and also for the MonadObject method 'fmap'. 'obDoubleF' is defined as follows::  </p>

  <Component28 />

  <p>Here is the function 'fmap' in action:  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
    onClick={() => {this.fmap(this.obDoubleF, mo1)
  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
        <Component16 />
  </button>



  <p>And here is MonadObject method 'fmap' accepting the same function, 'obDoubleF', as an argument:  </p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
    onClick={() => {mo1
    .fmap(this.obDoubleF)
    .bnd(mo2.ret)
    .bnd(this.obTripple) }}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
        <Component27 />
     </button>










  <h2 style={{textAlign: 'center' }} >Working With Numbers</h2>
  <p>  Here is the code for primitive monads:  </p>

            <Component1 />

                  <br />
                  And here is how we use instances of Monad to pass values along chains of computations: <br /><br />
                We begin by assigning a value of '5' to m, then we assign m's value plus '5' to m2, and finally, we assign m2's value plus 5 to m3. A one-second pause is inserted between the operations. This is the code for mAdd:<br /><br />

  <Component4 />

            <br /><br />
            And here is the code that is executed when the next button is clicked:
            <br /><br />

  <Component5 />

  <br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
    onClick={() => {m
    .bnd(this.reset_1)
    .bnd(this.reset_2)
    .bnd(this.reset_3)
    .bnd(this.pause, 0.6)
    .then(() => {m.ret(5)
      .bnd(this.pause, 0.6)
      .then(() => {m
        .bnd(mAdd,5,m2)
        .bnd(this.pause,0.6)
        .then(() => {m2
          .bnd(mAdd,5,m3)  }) }) }) }}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
              >
              Click to execute the code shown above
  </button>
  <p>By changing m2 to m in the second to last line, we can use m's new value instead of m2's in the final computation. This gives 'm3' a value of  '5 + 5' rather than '5 + 10' Here is the revised code and a button to run it:</p>

  <Component8 />
    <br />
      <button style={this.bool1 ? this.style1 : this.style2 } 
    onClick={() => {m
    .bnd(this.reset_1)
    .bnd(this.reset_2)
    .bnd(this.reset_3)
    .bnd(this.pause, 0.6)
    .then(() => {m.ret(5)
      .bnd(this.pause, 0.6)
      .then(() => {m
        .bnd(mAdd,5,m2)
        .bnd(this.pause,0.6)
        .then(() => {m
          .bnd(mAdd,5,m3)  }) }) }) }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
                >
                Click to execute the code shown above
  </button>
<p>As the display in the right column verifies, the monad that calls 'bnd' donates its value to the computation.</p>

<p>The following code shows another way to propagate a value through a chain of monads. Here, m's value, the number '23', travels all the way to the end of the sequence before it is used in a computation. It doesn't get used until after m2's value becomes the number '19'. The pause and reset code is omittedso it won't be a distraction.   </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
  onClick={() => {m
    .bnd(this.reset_1)
    .bnd(this.pause, 0.3)
    .then(() => {m
    .ret(23)
    .bnd(this.reset_2)
    .bnd(this.reset_3)
    .bnd(this.pause, 1)
    .then(() =>
      {m.bnd(x => {(m2
      .ret(19))
      .bnd(this.pause,1)
      .then(() =>
        {m2.bnd(y => {m3
        .ret(x + y)})   })   })   }) }) }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
  onMouseLeave={() => {mouse[37] = '#000', mouse[370] = 'darkred', mouse[38] = 'burlywood'}}
          >
    <Component9 />
</button>

<p> The next two demonstrations use the following four functions: </p>
<Component17 />
<p>First we run the functions on an anonymous monad. The final line, '.bnd(m.ret)', assigns the value of the computation to the monad 'm' so the result can be seen on the right.</p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
          onClick={() => {new Monad(1)
            .bnd(this.double)
            .bnd(this.tripple)
            .bnd(this.cube)
            .bnd(this.square)
            .bnd(m.ret)
          }}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            > 
            <Component24 />
          </button>
            <br /><br />

  <p>Next, we double the value of 'm', then give the result to 'm2' which tripples it, etc.  </p>
<Component26 />
      <button style={this.bool4 ? this.style1 : this.style2 } 
    onClick={() => {m
      .ret(1)
      .bnd(this.double)
      .bnd(m2.ret)
      .bnd(this.tripple)
      .bnd(m3.ret)
      .bnd(this.cube)
      .bnd(m4.ret)
      .bnd(this.square)
    }}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            > 
            <Component25 />
          </button>
            <br /><br />


            <p>In the following examples, we double the number '3' and then tripple it. The first example has the advantage of being atomic. 'new Monad(3)' is not associated with 'm3', or any other named monad, until the result is assigned to 'm3' on the last line. Although no other computation can interfere with it, it can interfere with other ongoing computations when if finishes and assigns the number '18' to monad 'm3'.</p>
              <p>Another computation could avoid producing a nonsensical result by extracting the value of 'm3' in the first step. If it is in progress when the anonymous computation finishes, it won't be descombobulated by '18' being assigned to 'm3'. But if it finishes after the assignment of '18' to 'm3' and if it assigns a value to 'm3', that value, and probably not '18', will become the value of 'm3', even though it is based on a stale value of 'm3'.</p>
                <p>Monadic computations do not need to assign values to monads; their results can be broadcast, printed, assigned to ordinary variables, etc. If they are going to alter the values of a monad, perhaps they should lock the monad until they finish, or wait for the lock to be released if another computation is using the monad of interest. I think that such complications are best avoided. If necessary, anonymous monads can retrieve data from and update a database, letting the database handle locking issues. Specialized monads can be made to handle concurrency in other cases. The basic monads, in my opinion, should remain simple. If I use them in an application, I will avoid naming them as much as possible and store values in ordinary Javascript objects and arrays, or in a database.</p>

      <button style={this.bool1 ? this.style1 : this.style2 } 
              onClick={() => {new Monad(3)
              .bnd(this.double)
              .bnd(this.tripple)
              .bnd(m3.ret)
            }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            >
            <Component22 />
          </button>
            <br /><br />

      <button style={this.bool2 ? this.style1 : this.style2 } 
              onClick={() => {m2
              .ret(3)
              .bnd(this.double)
              .bnd(this.tripple)
              }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
            >
            <Component23 />
          </button>
            <br /><br />

            <h3>Left Identity</h3>
            <p>The left identity law is "ret(a).bnd(f) = f(a)". "m.ret(v) gives m the value 'v' by definition, so the value of 'm.ret(42)' is '42'. The following demonstration tests whether ".bnd(m.ret)" changes the value of 'm'.  </p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
              onClick={() => {m.ret(21).bnd(this.double)}}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            > 
      ret(21).bnd(this.double)
          </button>
          <p>Next, we run "double(21. m2)". In the previous example, the monad was prvided by the 'this' of the monad calling 'bnd'. When using double as a function, it is necessary to provide the monad, 'm2' in this case. Originally, I defined 'double' as: </p>
          <Component29 />
          <p> That provided perfect symetry. No additional argument was necessary for the stand-alone function. Fresh monads were created each time 'double' was called, thereby avoiding mutation. The price for this purity was an unjustifiable drain on resources. Until I encounter a need for such purity, the version that creates new monads on each function call will remain commented out.    </p>
            
      <button style={this.bool4 ? this.style1 : this.style2 } 
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            > 
      this.double(21, m2)
          </button>
<p>The value of "this.double(21)" is '42', as expected. </p>

                                                              <h3>Right Identity</h3>
          <p>The right identity law is "m.bnd(ret) = m". The right column demonstrates that executing ".bnd(m.ret)" leaves monad 'm'  unchanged.  To show that m is still viable, we assign its value to 'm2' and give m3 the value "Success!".   </p>

      <button style={this.bool1 ? this.style1 : this.style2 } 
            onClick={() => {m
              .bnd(m.ret)
              .bnd(m2.ret)
              .bnd(() => m3.ret('Success!')) }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            > m.bnd(m.ret)
          </button>
          <br /><br />

      <button style={this.bool2 ? this.style1 : this.style2 } 
            onClick={() => {m.bnd(this.reset_1)}}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
            > Click to reset m.
          </button>
          <br /><br />
  
      <button style={this.bool3 ? this.style1 : this.style2 } 
            onClick={() => {m.ret('cow')}}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            > 
            Set 'm' to 'cow'.
          </button>
          <br /><br />

          <h3> Associativity </h3>
            <p>The associative law is "m.bnd(x => f(x).bnd(g)) = m.bnd(f).bnd(g)". We demonstrate that the law holds for the selected monad and these functions 'tripple' and 'cube', defined above.  </p>
            <br /><br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
            onClick={() => {m
              .ret(1)
              .bnd((a) => {this.tripple(a, m)
              .bnd(this.cube)
              })  
            }}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
<Component11 />
          </button>
          <br /><br />
      <button style={this.bool1 ? this.style1 : this.style2 } 
            onClick={() => {m2
              .ret(1)
              .bnd(this.tripple)
              .bnd(this.cube)
            }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            > 
<Component10 />
          </button>
<p>This isn't a formal proof, but as a hand-waving proof I ask, how could there be two functions mapping primitive values to monads, or some primitive value monad, for which this doesn't work? These monads seem much too simple for there to be an obscure edge case that violates the associative law. </p>
        <h3> Miscellaneous </h3>
      <button style={this.bool2 ? this.style1 : this.style2 } 
          onClick={() => {m.bnd(this.reset_1)}}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
            > Click to re-set m.
          </button>
          <br /><br />
      <button style={this.bool3 ? this.style1 : this.style2 } 
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            > Click to reset m2.
          </button>
          <br /><br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            > Click to reset m3.
          </button>
          <br /><br />
          The following Fibonacci computation works only if the value of 'm3' is '1'. If it isn't, just click the m3 reset button above.
          <br /><br />
      <button style={this.bool1 ? this.style1 : this.style2 } 
            onClick={() => {m3.bnd(this.fibo)}}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            > Click to observe 'm3.bnd(this.fibo) in m3.
          </button>
        ><br />

        <p> I don't know if these reactive monads will turn out to have any practical value. ES6 promises already provide computational chains. I like the way these monads can form indefinitely long chains of computations without defining any variables that are within the scope of anything outside the chain. The monads in the chain have access to all of the React component's functions and variables. Of course Javascript already has ways of creating private scope, so time will tell whether or not React.js mobservable monad's are more than a toy.  </p> 
        <br />
        <h2 style={{textAlign: 'center' }} >Working With Text</h2>
      <button style={this.bool2 ? this.style1 : this.style2 } 
          onClick={() => {m.ret('Hello')}}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
            >
            m.ret('Hello')
              </button>
      <br /><br />
      Clicking activates "m.ret('Hello').bnd(m)". "m.ret: is monad return for m. Because of the left identity property, binding m to m.ret("Hello") causes m to have the value "Hello", just as m("Hello") would do. "m.bnd" returns m which makes further chaining possible.
      <br /><br />
       The next button puts "World" in monad m2.
          <br /><br />
      <button style={this.bool3 ? this.style1 : this.style2 } 
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            >
            m2.ret(' World')
      </button>
          <br /><br />
          Clicking the next button runs "m.bnd(mAdd, m2(),m3) on m, then sends the result to m3 with ".bnd(m3)", and finally resets m with ".bnd(this.reset_1)".
          <br /><br />
      <button style={this.bool4 ? this.style1 : this.style2 } 
            onClick={() => {m.bnd(mAdd, m2.x(),m3).bnd(this.reset_1)}}
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
            m.bnd(mAdd, m2.x(),m3)
      </button>
<br /><br />
<br /><br />





 <h2 style={{textAlign: 'center' }} >Working With Arrays</h2>
 <p>Recall that the left identity rule is "ret(a).bnd(f) = f(a)"  </p>  

        <p>In the next demonstration, we use a MonadArray instance and the function 'mult10_Calc', which is defined as:</p>
        <Component19 />
        <p>This button runs the stand-alone function:</p>


      <button style={this.bool1 ? this.style1 : this.style2 } 
  onClick={() => {ma2
    .ret([0,0,0])
    .bnd(this.pause, 0.7)
    .then(() => {mult10_Calc([1,2,3])} ) }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
            >
            Click to run "mult10_Calc([1,2,3])"
</button>
      <p>Next, we bind an instance of MonadArray, which has a value of '[1,2,3], to the function mult10_Calc.</p>


      <button style={this.bool2 ? this.style1 : this.style2 } 
  onClick={() => {ma2
    .ret([0,0,0])
    .bnd(ma1.ret)
    .bnd(this.pause, 0.7)
    .then(() => {ma2
    .ret([1,2,3])
    .bnd(this.pause, 0.7)
    .then(() => {ma2.bnd(mult10_Calc)
    .bnd(this.pause, 0.7)
    .then(() => {ma1
    .ret(['Same',' as ','stand-alone'])
    }) }) })  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
            >
Run ma2.ret([1,2,3]).bnd(mult10_Calc)
</button>
<br />      <br />
THEOREM: Array monads conform to the monad left identity law.            
  <p>The right identity law is "m.bnd(ret) = m". Click the next button to test it on a MonadArray instance with a value of "[7,7,7]".</p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
            onClick={() => {ma1
              .ret([0,0,0])
              .bnd(ma2.ret)
              .bnd(this.pause, 0.7)
              .then(() => {ma1
              .ret([7,7,7])
              .bnd(ma1.ret)
              .bnd(this.pause, 0.7)
              .then(() => {ma2.ret(['OK','OK','OK'])
              }) }) }}


   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
            >
            Run ma1.ret([7,7,7]).bnd(ma1.ret).bnd(ma2.ret) (pause code omitted)
          </button>
          <p> 'ma1.bnd(ma1.ret)' leaves 'ma1' just as it was. 'bnd(ma2.ret)' is placed at the end so the result will be displayed in 'ma2'. Some further code gives monad 'ma1' the value "['OK','OK','OK']"</p>
          <p>THEOREM: Array monads conform to the monad right identity law.</p>

  <p>Lastly, we consider the associative law, "m.bnd(x => f(x).bnd(g)) = m.bnd(f).bnd(g)".  </p>
      <button style={this.bool4 ? this.style1 : this.style2 } 

            onClick={() => {ma2
              .ret([0,0,0])
              .bnd(this.pause, 0.7)
              .then(() => {ma2
              .bnd(this.add1Calc)
              .bnd(this.pause, 0.7)
              .then(() => {ma2
              .bnd(mult10_Calc)
              }) }) }}

   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
            >
            Click to run "ma2.bnd(this.add1Calc).bnd(mult10_Calc)".
          </button>
          <p>The function 'add1_mult10_Calc' is defined as: </p>
            <Component21 />

      <button style={this.bool1 ? this.style1 : this.style2 } 
            
            onClick={() => {ma2
              .ret([0,0,0])
              .bnd(ma1.ret)
              .bnd(this.pause, 0.7)
              .then(() => {ma2
              .bnd(this.add1_mult10_Calc)
              .bnd(this.pause, 0.7)
              .then(() => {ma2
              .bnd(ma1.ret)
              .bnd(this.pause, 0.7)
              .then(() => {ma2
              .bnd(ma2.ret)
              .ret(['OK','OK','OK'])
              }) }) }) }}

   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }

            >
            Click to run "ma2.bnd(this.add1_mult10_Calc)".
          </button>
          <br /><br />
<p> Binding the composit function produces the same result as sequentially binding the two individual functions.  </p>
<p> THEOREM: Array monads conform to the monad associativity law.  </p>
<h2>TodoList</h2>
<br />


<br /><br />

        </div>
</div>
    )}
  };

render(<B2 key='B2' />, document.getElementById('divSix'));
