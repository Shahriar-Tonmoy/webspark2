(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [607], {
        7356: function (e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/appearance", function () {
                return s(7045)
            }])
        },
        8238: function (e, a, s) {
            "use strict";
            var t = s(5893);
            s(7294);
            var i = s(1664),
                A = s.n(i),
                l = s(1163),
                n = s(5823);
            a.Z = e => {
                let {
                    title: a
                } = e, s = (0, l.useRouter)(), i = e => s.pathname === e;
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("div", {
                        className: "banner-area",
                        children: (0, t.jsxs)("div", {
                            className: "settings-area",
                            children: [(0, t.jsx)("h3", {
                                className: "title",
                                children: a
                            }), (0, t.jsx)("ul", {
                                className: "user-nav",
                                children: n && n.navDashboardItem.slice(0, 7).map((e, a) => (0, t.jsx)("li", {
                                    children: (0, t.jsx)(A(), {
                                        href: e.link,
                                        className: i(e.link) ? "active" : "",
                                        children: (0, t.jsx)("span", {
                                            children: "Profile" === e.text ? "Profile Details" : e.text
                                        })
                                    })
                                }, a))
                            })]
                        })
                    })
                })
            }
        },
        7045: function (e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function () {
                    return j
                }
            });
            var t = s(5893),
                i = s(7294),
                A = s(3709),
                l = s(7177),
                n = s(4953),
                r = s(345),
                c = s(2610),
                h = s(5675),
                d = s.n(h),
                g = s(3009),
                m = {
                    src: "/_next/static/media/dark.8a077423.png",
                    height: 750,
                    width: 1e3,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEURESE0NTomJihCFMdrAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAFElEQVR4nGNggAMmCGBgYIQAPAwABFAAKwGMdvIAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                o = {
                    src: "/_next/static/media/light.92339d2d.png",
                    height: 750,
                    width: 1e3,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEXj5Oj////l6Ovj4t693fvhAAAABHRSTlND/vf0ZEWO7AAAAAlwSFlzAAAFiQAABYkBbWid+gAAABZJREFUeJxjYIADZmYmEGBgYIQAPAwABKUALSQE810AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                x = {
                    src: "/_next/static/media/en-us.6d689adb.png",
                    height: 16,
                    width: 25,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEXrhXfnfG7ogXTtiXq1VVc1PXBVTnhBSHj4kX7bd2mYEeEWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nB3GyREAMAzCQGzw1X/DGbIfCTMdhqpOmKRfcJf0XETaAwnHAGbXTJLzAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                b = {
                    src: "/_next/static/media/fr.cf4bfbf4.png",
                    height: 23,
                    width: 35,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEUBUaP+///vNinxRDj1gHhQi8H71gQdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgYGBlZGRhYmYgggEABu8AUa0muYoAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                u = s(8238),
                p = () => {
                    let [e, a] = (0, i.useState)({
                        value: "English",
                        label: "English",
                        icon: x
                    }), s = [{
                        value: "English",
                        label: "English",
                        icon: x
                    }, {
                        value: "Spanish",
                        label: "Spanish",
                        icon: b
                    }, {
                        value: "Italic",
                        label: "Italic",
                        icon: x
                    }, {
                        value: "French",
                        label: "French",
                        icon: b
                    }], A = e => {
                        let {
                            value: a,
                            label: s,
                            icon: i
                        } = e;
                        return (0, t.jsxs)("div", {
                            className: "",
                            children: [(0, t.jsx)(d(), {
                                className: "left-image",
                                src: i,
                                alt: a,
                                width: 20,
                                height: 20
                            }), (0, t.jsx)("span", {
                                style: {
                                    marginLeft: "10px"
                                },
                                children: s
                            })]
                        })
                    };
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                            className: "rbt-main-content mr--0 mb--0",
                            children: (0, t.jsx)("div", {
                                className: "rbt-daynamic-page-content center-width",
                                children: (0, t.jsxs)("div", {
                                    className: "rbt-dashboard-content",
                                    children: [(0, t.jsx)(u.Z, {
                                        title: "Appearance"
                                    }), (0, t.jsx)("div", {
                                        className: "content-page pb--50",
                                        children: (0, t.jsxs)("div", {
                                            className: "chat-box-list",
                                            children: [(0, t.jsxs)("div", {
                                                className: "single-settings-box top-flashlight light-xl leftside",
                                                children: [(0, t.jsx)("h4", {
                                                    className: "title",
                                                    children: "Appearance"
                                                }), (0, t.jsxs)("div", {
                                                    className: "switcher-btn-grp",
                                                    children: [(0, t.jsxs)("button", {
                                                        className: "dark-switcher active",
                                                        children: [(0, t.jsx)(d(), {
                                                            src: m,
                                                            width: 200,
                                                            height: 150,
                                                            alt: "Switcher Image"
                                                        }), (0, t.jsx)("span", {
                                                            className: "text",
                                                            children: "Dark Mode"
                                                        })]
                                                    }), (0, t.jsxs)("button", {
                                                        className: "light-switcher disabled",
                                                        disabled: !0,
                                                        children: [(0, t.jsx)(d(), {
                                                            src: o,
                                                            width: 200,
                                                            height: 150,
                                                            alt: "Switcher Image"
                                                        }), (0, t.jsx)("span", {
                                                            className: "text",
                                                            children: "Light Mode"
                                                        }), (0, t.jsx)("span", {
                                                            className: "rainbow-badge-card badge-sm position-top-right",
                                                            children: "Coming"
                                                        })]
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "single-settings-box top-flashlight light-xl leftside",
                                                children: [(0, t.jsx)("h4", {
                                                    className: "title",
                                                    children: "Languages"
                                                }), (0, t.jsxs)("div", {
                                                    className: "select-area",
                                                    children: [(0, t.jsx)("h6", {
                                                        className: "text",
                                                        children: "System Language"
                                                    }), (0, t.jsx)("div", {
                                                        className: "rbt-modern-select bg-transparent height-45",
                                                        children: (0, t.jsx)(g.ZP, {
                                                            instanceId: "sortByAuthor",
                                                            className: "bootstrap-select",
                                                            classNamePrefix: "bootstrap-select",
                                                            defaultValue: e,
                                                            onChange: a,
                                                            options: s,
                                                            formatOptionLabel: A,
                                                            closeMenuOnSelect: !0,
                                                            maxMenuHeight: 150
                                                        })
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "select-area mt--20",
                                                    children: [(0, t.jsx)("h6", {
                                                        className: "text",
                                                        children: "Generate Language"
                                                    }), (0, t.jsx)("div", {
                                                        className: "rbt-modern-select bg-transparent height-45",
                                                        children: (0, t.jsx)("div", {
                                                            className: "dropdown bootstrap-select",
                                                            children: (0, t.jsx)(g.ZP, {
                                                                instanceId: "sortByAuthor",
                                                                className: "bootstrap-select",
                                                                classNamePrefix: "bootstrap-select",
                                                                defaultValue: s[3],
                                                                onChange: a,
                                                                options: s,
                                                                formatOptionLabel: A,
                                                                closeMenuOnSelect: !0,
                                                                menuPlacement: "top",
                                                                maxMenuHeight: 150
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                j = () => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(A.default, {
                        title: "Settings"
                    }), (0, t.jsx)("main", {
                        className: "page-wrapper rbt-dashboard-page",
                        children: (0, t.jsx)(l.ZP, {
                            children: (0, t.jsxs)("div", {
                                className: "rbt-panel-wrapper",
                                children: [(0, t.jsx)(n.Z, {
                                    display: "d-none"
                                }), (0, t.jsx)(r.Z, {}), (0, t.jsx)(c.Z, {}), (0, t.jsx)(p, {})]
                            })
                        })
                    })]
                })
        }
    },
    function (e) {
        e.O(0, [675, 996, 367, 9, 691, 899, 774, 888, 179], function () {
            return e(e.s = 7356)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=appearance-d3e94b86ed3d1ea3.js.map