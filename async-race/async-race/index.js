(() => {
  'use strict';
  var e = {
      456: (e, t, i) => {
        i.r(t);
      },
      131: function (e, t) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, i, n) {
            return new (i || (i = Promise))(function (r, a) {
              function s(e) {
                try {
                  d(n.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(n.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(s, o);
              }
              d((n = n.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.deleteWinner =
            t.updateWinner =
            t.createWinner =
            t.getWinner =
            t.getWinners =
            t.stopCarEngine =
            t.drive =
            t.startCarEngine =
            t.updateCar =
            t.deleteCar =
            t.setCar =
            t.getCar =
            t.getCars =
              void 0);
        const n = 'http://127.0.0.1:3000';
        (t.getCars = function (e) {
          return i(this, void 0, void 0, function* () {
            const t = `${n}/garage?_page=${e}&_limit=7`,
              i = yield fetch(t);
            return { amount: i.headers.get('X-Total-Count'), cars: yield i.json() };
          });
        }),
          (t.getCar = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/garage/${e}`);
              return yield t.json();
            });
          }),
          (t.setCar = function (e, t) {
            return i(this, void 0, void 0, function* () {
              const i = { name: e, color: t },
                r = yield fetch(`${n}/garage`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(i),
                });
              return yield r.json();
            });
          }),
          (t.deleteCar = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/garage/${e}`, { method: 'DELETE' });
              return yield t.json();
            });
          }),
          (t.updateCar = function (e, t, r) {
            return i(this, void 0, void 0, function* () {
              const i = { name: t, color: r },
                a = yield fetch(`${n}/garage/${e}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(i),
                });
              return yield a.json();
            });
          }),
          (t.startCarEngine = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = new URLSearchParams({ id: `${e}`, status: 'started' }),
                i = yield fetch(`${n}/engine?${t}`, { method: 'PATCH' }),
                r = yield i.json();
              return r.distance / r.velocity;
            });
          }),
          (t.drive = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = new URLSearchParams({ id: `${e}`, status: 'drive' }),
                i = yield fetch(`${n}/engine?${t}`, { method: 'PATCH' });
              return (yield i).ok;
            });
          }),
          (t.stopCarEngine = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = new URLSearchParams({ id: `${e}`, status: 'stopped' }),
                i = yield fetch(`${n}/engine?${t}`, { method: 'PATCH' }),
                r = yield i.json();
              return r.distance / r.velocity;
            });
          }),
          (t.getWinners = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = `${n}/winners?_page=${e}&_limit=10`,
                i = yield fetch(t);
              return { amount: i.headers.get('X-Total-Count'), winners: yield i.json() };
            });
          }),
          (t.getWinner = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/winners/${e}`);
              return { status: t.ok, data: yield t.json() };
            });
          }),
          (t.createWinner = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/winners`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e),
              });
              return yield t.json();
            });
          }),
          (t.updateWinner = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/winners/${e.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ wins: e.wins, time: e.time }),
              });
              return yield t.json();
            });
          }),
          (t.deleteWinner = function (e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(`${n}/winners/${e}`, { method: 'DELETE' });
              return yield t.json();
            });
          });
      },
      738: function (e, t, i) {
        var n,
          r,
          a,
          s =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          o =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          d =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const l = d(i(8)),
          c = d(i(122)),
          h = d(i(182)),
          u = d(i(83)),
          f = i(186);
        class m extends l.default {
          constructor() {
            super('div', 'app'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s(
                this,
                r,
                new u.default('button', 'Garage', { id: 'garage-button', disabled: 'true' }, () => this.renderGarage()),
                'f'
              ),
              s(this, a, new u.default('button', 'Winners', { id: 'winners-button' }, () => this.renderWinners()), 'f'),
              s(this, n, new l.default('main', 'main', new c.default()), 'f'),
              this.appendChildren((0, f.div)('buttons', o(this, r, 'f'), o(this, a, 'f')), o(this, n, 'f'));
          }
          renderGarage() {
            o(this, r, 'f').addAttributes({ disabled: 'true' }),
              o(this, a, 'f').deleteAttribute('disabled'),
              o(this, n, 'f').clear(),
              o(this, n, 'f').appendChildren(new c.default());
          }
          renderWinners() {
            o(this, a, 'f').addAttributes({ disabled: 'true' }),
              o(this, r, 'f').deleteAttribute('disabled'),
              o(this, n, 'f').clear(),
              o(this, n, 'f').appendChildren(new h.default());
          }
        }
        (n = new WeakMap()), (r = new WeakMap()), (a = new WeakMap()), (t.default = m);
      },
      83: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8));
        class a extends r.default {
          constructor(e, t, i, n) {
            super('button', e), this.addAttributes(i), this.changeText(t), n && this.setListener('click', n);
          }
        }
        t.default = a;
      },
      8: function (e, t) {
        var i,
          n =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (i = new WeakMap()),
          (t.default = class {
            constructor(e, t, ...a) {
              i.set(this, void 0),
                n(this, i, document.createElement(e), 'f'),
                (r(this, i, 'f').className = t),
                a && a.forEach((e) => r(this, i, 'f').append(e.getNode()));
            }
            addClass(e) {
              r(this, i, 'f').classList.add(e);
            }
            toggleClass(e) {
              r(this, i, 'f').classList.toggle(e);
            }
            removeClass(e) {
              r(this, i, 'f').classList.remove(e);
            }
            setListener(e, t) {
              r(this, i, 'f').addEventListener(e, t);
            }
            removeListener(e, t) {
              r(this, i, 'f').removeEventListener(e, t);
            }
            changeText(e) {
              r(this, i, 'f').textContent = e;
            }
            addAttributes(e) {
              Object.keys(e).forEach((t) => r(this, i, 'f').setAttribute(t, e[t]));
            }
            deleteAttribute(e) {
              r(this, i, 'f').removeAttribute(e);
            }
            appendChildren(...e) {
              e.forEach((e) => r(this, i, 'f').append(e.getNode()));
            }
            replaceChild(e, t) {
              r(this, i, 'f').replaceChild(e.getNode(), t.getNode());
            }
            destroy() {
              r(this, i, 'f').remove();
            }
            getNode() {
              return r(this, i, 'f');
            }
            setStyle(e, t) {
              r(this, i, 'f').style.setProperty(e, t);
            }
            clear() {
              r(this, i, 'f').innerHTML = '';
            }
          });
      },
      807: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8));
        class a extends r.default {
          constructor(e, t, i) {
            super('input', e), this.addAttributes(t), i && this.setListener('input', i);
          }
          getValue() {
            return this.getNode().value;
          }
        }
        t.default = a;
      },
      186: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.img = t.h3 = t.h2 = t.h1 = t.span = t.p = t.div = void 0);
        const r = n(i(8));
        (t.div = (e, ...t) => new r.default('div', e, ...t)),
          (t.p = (e, t, ...i) => {
            const n = new r.default('p', e, ...i);
            return n.changeText(t), n;
          }),
          (t.span = (e, t, ...i) => {
            const n = new r.default('span', e, ...i);
            return n.changeText(t), n;
          }),
          (t.h1 = (e, t, ...i) => {
            const n = new r.default('h1', e, ...i);
            return n.changeText(t), n;
          }),
          (t.h2 = (e, t, ...i) => {
            const n = new r.default('h2', e, ...i);
            return n.changeText(t), n;
          }),
          (t.h3 = (e, t, ...i) => {
            const n = new r.default('h3', e, ...i);
            return n.changeText(t), n;
          }),
          (t.img = (e, t, i) => {
            const n = new r.default('img', e);
            return n.addAttributes({ src: t, alt: i }), n;
          });
      },
      300: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8));
        class a extends r.default {
          constructor(e) {
            super('div', 'cars-item__car-icon'),
              (this.getNode().innerHTML = `<svg class="svg" width="116" height="40" viewBox="0 0 580 200"\n    xmlns="http://www.w3.org/2000/svg" version="1.1"><g id="car-dodger" transform="scale(1.0)">\n    <rect x="70" y="10" width="220" height="130" fill="transparent" rx="150" stroke=${e} stroke-width="15" />\n    <rect x="10" y="70" width="340" height="80" fill=${e} rx="30" /><g>\n    <line x1="145" y1="10" x2="145" y2="80" stroke=${e} stroke-width="15"/>\n    <line x1="215" y1="10" x2="215" y2="80" stroke=${e} stroke-width="15"/></g><g>\n    <rect x="0" y="110" width="40" height="20" fill="#999" rx="10" />\n    <rect x="325" y="110" width="40" height="20" fill="#999" rx="10" /></g><g>\n    <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="90" cy="140"/>    \n    <circle r="15px" fill="#555" cx="90" cy="140"/></g><g>\n    <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="270" cy="140"/>\n    <circle r="15px" fill="#555" cx="270" cy="140"/></g><g>\n    <circle r="15px" fill="gold" cx="340" cy="90"/><circle r="10px" fill="white" cx="15" cy="90"/></g></g></svg>`);
          }
          getPosition() {
            return this.getNode().getBoundingClientRect().x;
          }
        }
        t.default = a;
      },
      646: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          d =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          l =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          c =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const h = c(i(8)),
          u = i(186),
          f = c(i(83)),
          m = i(438),
          p = i(131),
          w = c(i(852)),
          g = c(i(300));
        class v extends h.default {
          constructor({ color: e, name: t, id: i, callback: c }) {
            super(
              'div',
              'cars__item',
              new f.default('button', 'Select', {}, () => this.selectCar(i, t, e)),
              new f.default('button', 'Remove', {}, () => {
                (0, p.deleteCar)(i).then(() => {
                  this.destroy(), c(), (0, p.deleteWinner)(i);
                });
              }),
              (0, u.span)('cars-item__title', `${t}`)
            ),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              o.set(this, void 0),
              d(this, n, i, 'f'),
              d(this, r, new g.default(e), 'f'),
              d(this, a, (0, u.img)('cars-item__flag', w.default, 'flag'), 'f'),
              d(this, s, new f.default('start-button', 'A', {}, () => this.moveCar()), 'f'),
              d(this, o, new f.default('stop-button clicked', 'B', { disabled: 'true' }, () => this.stopCar()), 'f'),
              this.addAttributes({ id: `item${i}` }),
              l(this, r, 'f').addAttributes({ id: `car${i}`, 'data-name': `${t}` }),
              this.appendChildren((0, u.div)('', l(this, s, 'f'), l(this, o, 'f')), l(this, r, 'f'), l(this, a, 'f'));
          }
          selectCar(e, t, i) {
            const n = localStorage.getItem('selected');
            if (n && Number(n) !== e) {
              const t = (0, m.getDomElement)(`#car${n}`),
                i = localStorage.getItem('old-color') || '';
              console.log(i);
              const r = t.dataset.name,
                a = new g.default(i);
              a.addAttributes({ id: `car${e}`, 'data-name': `${r}` }), t.replaceWith(a.getNode());
            }
            ((0, m.getDomElement)('.update-form .name-input').value = t),
              ((0, m.getDomElement)('.update-form .color-input').value = i),
              localStorage.setItem('selected', `${e}`),
              localStorage.setItem('old-color', `${i}`);
          }
          moveCar() {
            (0, p.startCarEngine)(l(this, n, 'f')).then((e) => {
              const t = e,
                i = l(this, a, 'f').getNode().getBoundingClientRect().x - l(this, r, 'f').getPosition();
              document.documentElement.style.setProperty('--my-distance', `${i}px`),
                l(this, r, 'f').setStyle('animation', `${t}ms linear move forwards`),
                l(this, r, 'f').setListener('animationend', () => {
                  (0, p.stopCarEngine)(l(this, n, 'f'));
                }),
                l(this, s, 'f').addAttributes({ disabled: 'true' }),
                l(this, o, 'f').deleteAttribute('disabled'),
                (0, p.drive)(l(this, n, 'f')).then((e) => {
                  e || l(this, r, 'f').setStyle('animation-play-state', 'paused');
                });
            });
          }
          stopCar() {
            (0, p.stopCarEngine)(l(this, n, 'f')).then(() => {
              l(this, r, 'f').setStyle('transition', '0ms'),
                l(this, r, 'f').setStyle('animation', 'none'),
                l(this, o, 'f').addAttributes({ disabled: 'true' }),
                l(this, s, 'f').deleteAttribute('disabled');
            });
          }
        }
        (n = new WeakMap()),
          (r = new WeakMap()),
          (a = new WeakMap()),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (t.default = v);
      },
      4: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          d =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          l =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const c = l(i(8)),
          h = i(131),
          u = i(186),
          f = l(i(646)),
          m = i(438),
          p = l(i(964));
        class w extends c.default {
          constructor(e, t) {
            super('div', 'cars'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              o(this, n, (0, u.h2)('title', 'Garage'), 'f'),
              o(this, r, 0, 'f'),
              o(this, a, 0, 'f'),
              o(this, s, t, 'f'),
              this.appendChildren(d(this, n, 'f'), (0, u.h3)('page-title', `Page ${e}`)),
              (0, h.getCars)(e).then((e) => {
                o(this, r, Number(e.amount), 'f'),
                  d(this, n, 'f').changeText(`Garage (${d(this, r, 'f')})`),
                  o(this, a, e.cars.length, 'f');
                for (let t = 0; t < e.cars.length; t++)
                  this.appendChildren(
                    new f.default({
                      color: e.cars[t].color,
                      name: e.cars[t].name,
                      id: e.cars[t].id,
                      callback: d(this, s, 'f'),
                    })
                  );
              });
          }
          getAmount() {
            return d(this, r, 'f');
          }
          createCar(e, t) {
            (0, h.setCar)(e, t).then((i) => {
              var l, c;
              d(this, a, 'f') < 7
                ? (this.appendChildren(new f.default({ color: t, name: e, id: i.id, callback: d(this, s, 'f') })),
                  d(this, n, 'f').changeText(`Garage (${o(this, r, ((l = d(this, r, 'f')), ++l), 'f')})`),
                  o(this, a, ((c = d(this, a, 'f')), ++c), 'f'))
                : (0, m.getDomElement)('#next-button').removeAttribute('disabled'),
                localStorage.removeItem('create-name'),
                localStorage.removeItem('create-color');
            });
          }
          generateCars() {
            for (let e = 0; e < 100; e++) {
              const e = this.randomizeName(),
                t = this.randomizeColor();
              (0, h.setCar)(e, t).then((i) => {
                var n;
                d(this, a, 'f') < 7 &&
                  (this.appendChildren(new f.default({ color: t, name: e, id: i.id, callback: d(this, s, 'f') })),
                  o(this, a, ((n = d(this, a, 'f')), ++n), 'f'));
              });
            }
            o(this, r, d(this, r, 'f') + 100, 'f'),
              d(this, n, 'f').changeText(`Garage(${d(this, r, 'f')})`),
              (0, m.getDomElement)('#next-button').removeAttribute('disabled');
          }
          randomize(e) {
            return Math.floor(Math.random() * e);
          }
          randomizeName() {
            const e = this.randomize(p.default.length);
            let { name: t } = p.default[e];
            t = p.default[e].name;
            const i = p.default[e].model.length;
            return `${t} ${p.default[e].model[this.randomize(i)]}`;
          }
          randomizeColor() {
            let e = '#';
            for (let t = 0; t < 6; t++) e += '0123456789ABCDEF'[this.randomize(16)];
            return e;
          }
        }
        (n = new WeakMap()), (r = new WeakMap()), (a = new WeakMap()), (s = new WeakMap()), (t.default = w);
      },
      245: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8)),
          a = n(i(807)),
          s = n(i(83)),
          o = n(i(300)),
          d = i(438);
        class l extends r.default {
          constructor(e, t) {
            super('div', `${e.toLowerCase()}-form`);
            const i = localStorage.getItem(`${e.toLowerCase()}-name`) || '',
              n = localStorage.getItem(`${e.toLowerCase()}-color`) || '#000000',
              r = new a.default('name-input', { type: 'text', name: 'name', value: i }),
              l = new a.default('color-input', { type: 'color', name: 'color', value: n }),
              c = new s.default('button', e, { type: 'button' }, () => t(r.getValue(), l.getValue()));
            c.setListener('click', () => {
              (r.getNode().value = ''), (l.getNode().value = '#000000');
            }),
              r.setListener('input', () => {
                localStorage.setItem(`${e.toLowerCase()}-name`, `${r.getValue()}`);
              }),
              l.setListener('input', () => {
                if (
                  (localStorage.setItem(`${e.toLowerCase()}-color`, `${l.getValue()}`),
                  'Update' === e && localStorage.getItem('selected'))
                ) {
                  const e = localStorage.getItem('selected'),
                    t = (0, d.getDomElement)(`#car${e}`),
                    i = t.dataset.name,
                    n = new o.default(l.getValue());
                  n.addAttributes({ id: `car${e}`, 'data-name': `${i}` }), t.replaceWith(n.getNode());
                }
              }),
              this.appendChildren(r, l, c);
          }
        }
        t.default = l;
      },
      122: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          d =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          l =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const c = l(i(8)),
          h = l(i(175)),
          u = l(i(4)),
          f = l(i(83)),
          m = i(186),
          p = i(438);
        class w extends c.default {
          constructor() {
            super('div', 'garage'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              o(this, s, Number(localStorage.getItem('garage-page') || 1), 'f'),
              o(this, n, new u.default(d(this, s, 'f'), () => this.changePage()), 'f'),
              o(
                this,
                r,
                new f.default('button', 'Prev', { id: 'prev-button' }, () => {
                  var e;
                  o(this, s, ((e = d(this, s, 'f')), --e), 'f'), this.changePage();
                }),
                'f'
              ),
              o(
                this,
                a,
                new f.default('button', 'Next', { id: 'next-button' }, () => {
                  var e;
                  o(this, s, ((e = d(this, s, 'f')), ++e), 'f'), this.changePage();
                }),
                'f'
              ),
              this.appendChildren(
                new h.default({
                  createCar: (e, t) => d(this, n, 'f').createCar(e, t),
                  generateCars: () => d(this, n, 'f').generateCars(),
                  change: () => this.changePage(),
                  checkPageBtns: () => this.disableNextBtn(),
                }),
                d(this, n, 'f'),
                (0, m.div)('page-buttons', d(this, r, 'f'), d(this, a, 'f'))
              ),
              this.disableNextBtn();
          }
          changePage() {
            localStorage.setItem('garage-page', `${d(this, s, 'f')}`),
              d(this, r, 'f').deleteAttribute('disabled'),
              this.disableNextBtn();
            const e = new u.default(d(this, s, 'f'), () => this.changePage());
            d(this, n, 'f').getNode().replaceWith(e.getNode()),
              o(this, n, e, 'f'),
              (0, p.getDomElement)('#winners-button').removeAttribute('disabled'),
              (0, p.getDomElement)('#race-button').removeAttribute('disabled'),
              (0, p.getDomElement)('#reset-button').setAttribute('disabled', 'true');
          }
          disableNextBtn() {
            1 === d(this, s, 'f') && d(this, r, 'f').addAttributes({ disabled: 'true' }),
              d(this, s, 'f') === Math.ceil(d(this, n, 'f').getAmount() / 7)
                ? d(this, a, 'f').addAttributes({ disabled: 'true' })
                : d(this, a, 'f').deleteAttribute('disabled');
          }
        }
        (n = new WeakMap()), (r = new WeakMap()), (a = new WeakMap()), (s = new WeakMap()), (t.default = w);
      },
      175: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = Promise))(function (r, a) {
                function s(e) {
                  try {
                    d(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function o(e) {
                  try {
                    d(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function d(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(s, o);
                }
                d((n = n.apply(e, t || [])).next());
              });
            },
          d =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          l =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          c =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const h = c(i(8)),
          u = c(i(83)),
          f = c(i(646)),
          m = c(i(245)),
          p = c(i(13)),
          w = i(438),
          g = i(186),
          v = i(131);
        class b extends h.default {
          constructor({ createCar: e, generateCars: t, change: i, checkPageBtns: o }) {
            super('div', 'manage-block'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              d(this, n, new u.default('button', 'Race', { id: 'race-button' }, () => this.startRace()), 'f'),
              d(
                this,
                r,
                new u.default('button', 'Reset', { id: 'reset-button', disabled: 'true' }, () => this.stopRace()),
                'f'
              ),
              this.appendChildren(
                new m.default('Create', e),
                new m.default('Update', this.updateCar),
                (0, g.div)('race-buttons', l(this, n, 'f'), l(this, r, 'f')),
                new u.default('button', 'Generate cars', { id: 'generate-button' }, t)
              ),
              d(this, a, new p.default(), 'f'),
              (this.changePage = i),
              d(this, s, o, 'f');
          }
          updateCar(e, t) {
            const i = localStorage.getItem('selected');
            i &&
              (0, v.updateCar)(Number(i), e, t).then(() => {
                const n = (0, w.getDomElement)(`#item${i}`),
                  r = new f.default({ color: t, name: e, id: Number(i), callback: () => this.changePage() });
                n.replaceWith(r.getNode()),
                  localStorage.removeItem('selected'),
                  localStorage.removeItem('update-name'),
                  localStorage.removeItem('update-color');
              });
          }
          startRace() {
            return o(this, void 0, void 0, function* () {
              const e = localStorage.getItem('garage-page') || '1';
              l(this, n, 'f').addAttributes({ disabled: 'true' }),
                (0, w.getDomElement)('#winners-button').setAttribute('disabled', 'true'),
                (0, w.getDomElement)('#prev-button').setAttribute('disabled', 'true'),
                (0, w.getDomElement)('#next-button').setAttribute('disabled', 'true'),
                (0, w.getDomElements)('.start-button').forEach((e) => e.setAttribute('disabled', 'true')),
                (0, w.getDomElements)('.stop-button').forEach((e) => e.removeAttribute('disabled'));
              const t = (yield (0, v.getCars)(Number(e))).cars.map((e) => e.id),
                i =
                  (0, w.getDomElement)('.cars-item__flag').getBoundingClientRect().x -
                  (0, w.getDomElement)('.cars-item__car-icon').getBoundingClientRect().x;
              document.documentElement.style.setProperty('--my-distance', `${i}px`);
              const r = yield Promise.allSettled(
                  t.map((e) =>
                    o(this, void 0, void 0, function* () {
                      return (0, v.startCarEngine)(e);
                    })
                  )
                ),
                a = (0, w.getDomElement)('.cars');
              (a.onanimationend = (e) => {
                (a.onanimationend = null), this.defineWinner(e);
              }),
                r.forEach((e) => {
                  if ('fulfilled' === e.status) {
                    const i = t[r.indexOf(e)],
                      n = e.value,
                      a = (0, w.getDomElement)(`#car${i}`);
                    a.style.setProperty('animation', `${n}ms linear move forwards`),
                      a.addEventListener('animationend', () => {
                        (0, v.stopCarEngine)(i);
                      }),
                      (0, v.drive)(i).then((e) => {
                        e || a.style.setProperty('animation-play-state', 'paused');
                      });
                  }
                });
            });
          }
          defineWinner(e) {
            const { target: t } = e;
            if (t instanceof HTMLElement) {
              const e = parseInt(t.style.animationDuration, 10) / 1e3,
                i = t.dataset.name || '',
                n = Number(t.id.slice(3));
              this.setWinner(n, e),
                l(this, a, 'f').show(i, e),
                l(this, a, 'f').setListener('click', () => {
                  l(this, a, 'f').hide();
                });
            }
            l(this, r, 'f').deleteAttribute('disabled'),
              (0, w.getDomElement)('#winners-button').removeAttribute('disabled'),
              (0, w.getDomElement)('#prev-button').removeAttribute('disabled'),
              (0, w.getDomElement)('#next-button').removeAttribute('disabled'),
              l(this, s, 'f').call(this);
          }
          setWinner(e, t) {
            (0, v.getWinner)(e).then((i) => {
              const { status: n } = i;
              if (n) {
                const { data: n } = i,
                  r = n.wins + 1;
                n.time < t && (t = n.time), (0, v.updateWinner)({ id: e, wins: r, time: t });
              } else {
                const i = 1;
                (0, v.createWinner)({ id: e, wins: i, time: t });
              }
            });
          }
          stopRace() {
            l(this, n, 'f').deleteAttribute('disabled'),
              l(this, r, 'f').addAttributes({ disabled: 'true' }),
              (0, w.getDomElements)('.start-button').forEach((e) => e.removeAttribute('disabled')),
              (0, w.getDomElements)('.stop-button').forEach((e) => e.setAttribute('disabled', 'true')),
              (0, w.getDomElements)('.cars-item__car-icon').forEach((e) => {
                (e.style.transition = '0ms'), (e.style.animation = 'none');
              });
          }
        }
        (n = new WeakMap()), (r = new WeakMap()), (a = new WeakMap()), (s = new WeakMap()), (t.default = b);
      },
      13: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8)),
          a = i(438),
          s = i(186);
        class o extends r.default {
          constructor() {
            super('div', 'modal');
          }
          show(e, t) {
            this.appendChildren((0, s.p)('modal__text', `${e} went first (${t}s)`)),
              (0, a.getDomElement)('.garage').appendChild(this.getNode());
          }
          hide() {
            this.clear(), this.destroy();
          }
        }
        t.default = o;
      },
      182: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          d,
          l,
          c =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = Promise))(function (r, a) {
                function s(e) {
                  try {
                    d(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function o(e) {
                  try {
                    d(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function d(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(s, o);
                }
                d((n = n.apply(e, t || [])).next());
              });
            },
          h =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          u =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          f =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const m = f(i(8)),
          p = i(186),
          w = i(131),
          g = f(i(83)),
          v = f(i(840));
        class b extends m.default {
          constructor() {
            super('div', 'winners'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              o.set(this, void 0),
              d.set(this, void 0),
              l.set(this, void 0),
              h(this, n, Number(localStorage.getItem('winners-page') || 1), 'f'),
              h(this, s, 0, 'f'),
              h(this, r, (0, p.h2)('title', 'Winners'), 'f'),
              h(this, a, (0, p.h3)('page-title', `Page ${u(this, n, 'f')}`), 'f'),
              h(this, o, new v.default(), 'f'),
              h(
                this,
                d,
                new g.default('button', 'Prev', { id: 'prev-button' }, () => {
                  var e;
                  h(this, n, ((e = u(this, n, 'f')), --e), 'f'), this.changePage();
                }),
                'f'
              ),
              h(
                this,
                l,
                new g.default('button', 'Next', { id: 'next-button' }, () => {
                  var e;
                  h(this, n, ((e = u(this, n, 'f')), ++e), 'f'), this.changePage();
                }),
                'f'
              ),
              this.appendChildren(
                u(this, r, 'f'),
                u(this, a, 'f'),
                u(this, o, 'f'),
                (0, p.div)('page-buttons', u(this, d, 'f'), u(this, l, 'f'))
              ),
              this.getResponse();
          }
          getResponse() {
            return c(this, void 0, void 0, function* () {
              const e = yield (0, w.getWinners)(u(this, n, 'f'));
              h(this, s, Number(e.amount), 'f'),
                u(this, r, 'f').changeText(`Winners(${u(this, s, 'f')})`),
                u(this, a, 'f').changeText(`Page ${u(this, n, 'f')}`),
                u(this, o, 'f').render(e.winners),
                this.disableNextBtn();
            });
          }
          changePage() {
            localStorage.setItem('winners-page', `${u(this, n, 'f')}`),
              u(this, d, 'f').deleteAttribute('disabled'),
              this.getResponse();
          }
          disableNextBtn() {
            1 === u(this, n, 'f') && u(this, d, 'f').addAttributes({ disabled: 'true' }),
              u(this, n, 'f') === Math.ceil(u(this, s, 'f') / 10)
                ? u(this, l, 'f').addAttributes({ disabled: 'true' })
                : u(this, l, 'f').deleteAttribute('disabled');
          }
        }
        (n = new WeakMap()),
          (r = new WeakMap()),
          (a = new WeakMap()),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (d = new WeakMap()),
          (l = new WeakMap()),
          (t.default = b);
      },
      721: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(8)),
          a = i(131),
          s = n(i(300)),
          o = i(186);
        class d extends r.default {
          constructor(e, t) {
            super('div', 'winners__table__item', (0, o.span)('item-number', `${t}`));
            const { carIcon: i, itemName: n } = this.render(e.id);
            this.appendChildren(i, n, (0, o.span)('item-wins', `${e.wins}`), (0, o.span)('', `${e.time}`));
          }
          render(e) {
            const t = (0, o.span)('', ''),
              i = (0, o.span)('item-name', '');
            return (
              (0, a.getCar)(e).then((e) => {
                t.appendChildren(new s.default(e.color)), i.changeText(e.name);
              }),
              { carIcon: t, itemName: i }
            );
          }
        }
        t.default = d;
      },
      840: function (e, t, i) {
        var n,
          r,
          a,
          s,
          o,
          d,
          l =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, i, n, r) {
              if ('m' === n) throw new TypeError('Private method is not writable');
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a setter');
              if ('function' == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError('Cannot write private member to an object whose class did not declare it');
              return 'a' === n ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
            },
          c =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, i, n) {
              if ('a' === i && !n) throw new TypeError('Private accessor was defined without a getter');
              if ('function' == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError('Cannot read private member from an object whose class did not declare it');
              return 'm' === i ? n : 'a' === i ? n.call(e) : n ? n.value : t.get(e);
            },
          h =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const u = h(i(8)),
          f = h(i(721)),
          m = i(186);
        class p extends u.default {
          constructor() {
            super('div', 'winners__table'),
              n.set(this, void 0),
              r.set(this, void 0),
              a.set(this, void 0),
              s.set(this, void 0),
              o.set(this, void 0),
              d.set(this, void 0),
              l(this, o, [], 'f'),
              l(this, d, { wins: 'none', time: 'none' }, 'f'),
              l(this, r, (0, m.span)('header-wins', 'Wins'), 'f'),
              c(this, r, 'f').setListener('click', () => this.changeSorting('wins')),
              l(this, a, (0, m.span)('', 'Best time (seconds)'), 'f'),
              c(this, a, 'f').setListener('click', () => this.changeSorting('time')),
              l(
                this,
                n,
                (0, m.div)(
                  'winners__header',
                  (0, m.span)('', 'Number'),
                  (0, m.span)('header-car', 'Car'),
                  (0, m.span)('header-name', 'Name'),
                  c(this, r, 'f'),
                  c(this, a, 'f')
                ),
                'f'
              ),
              l(this, s, (0, m.div)('winners__table__items'), 'f'),
              this.appendChildren(c(this, n, 'f'), c(this, s, 'f'));
          }
          render(e) {
            l(this, o, e, 'f'), c(this, s, 'f').clear(), this.renderItems();
          }
          renderItems() {
            for (let e = 0; e < c(this, o, 'f').length; e++)
              c(this, s, 'f').appendChildren(new f.default(c(this, o, 'f')[e], e + 1));
          }
          changeSorting(e) {
            const t = { none: '', ASC: ' ⭡', DSC: ' ⭣' };
            'wins' === e
              ? ((c(this, d, 'f').time = 'none'),
                'ASC' === c(this, d, 'f').wins ? (c(this, d, 'f').wins = 'DSC') : (c(this, d, 'f').wins = 'ASC'))
              : ((c(this, d, 'f').wins = 'none'),
                'ASC' === c(this, d, 'f').time ? (c(this, d, 'f').time = 'DSC') : (c(this, d, 'f').time = 'ASC')),
              c(this, r, 'f').changeText(`Wins${t[c(this, d, 'f').wins]}`),
              c(this, a, 'f').changeText(`Best time (seconds)${t[c(this, d, 'f').time]}`),
              this.sortingItems(e);
          }
          sortingItems(e) {
            'ASC' === c(this, d, 'f')[e]
              ? c(this, o, 'f').sort((t, i) => t[e] - i[e])
              : c(this, o, 'f').sort((t, i) => i[e] - t[e]),
              c(this, s, 'f').clear(),
              this.renderItems();
          }
        }
        (n = new WeakMap()),
          (r = new WeakMap()),
          (a = new WeakMap()),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (d = new WeakMap()),
          (t.default = p);
      },
      156: function (e, t, i) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(i(738));
        i(456), document.body.appendChild(new r.default().getNode());
      },
      438: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDomElements = t.getDomElement = void 0),
          (t.getDomElement = function (e) {
            const t = document.querySelector(e);
            if (!t) throw new Error(`${e} is null`);
            return t;
          }),
          (t.getDomElements = function (e) {
            const t = document.querySelectorAll(e);
            if (!t) throw new Error(`${e} is null`);
            return t;
          });
      },
      852: (e, t, i) => {
        e.exports = i.p + 'assets/flag.svg';
      },
      964: (e) => {
        e.exports = JSON.parse(
          '[{"name":"Bugatti","model":["Chiron","Grand Sport","Divo"]},{"name":"Bentley","model":["Continental","Arnage","Azure"]},{"name":"BMW","model":["Sedan","Cabrio","X4"]},{"name":"Ferrari","model":["F430","Italia","Spider"]},{"name":"Fiat","model":["Punto","Panda","Bravo"]},{"name":"Hyundai","model":["i10","Sonata","Solaris"]},{"name":"Jaguar","model":["X-Type","Cabrio","F-Pace"]},{"name":"Jeep","model":["Liberty","Compass","Wrangler"]},{"name":"Toyota","model":["Corolla","Prius","Auris"]},{"name":"Volkswagen","model":["Passat","Golf R","Tiguan"]}]'
        );
      },
    },
    t = {};
  function i(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, i), a.exports;
  }
  (i.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (i.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + '');
      var t = i.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script');
        if (n.length) for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); ) e = n[r--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (i.p = e);
    })(),
    i(156);
})();
