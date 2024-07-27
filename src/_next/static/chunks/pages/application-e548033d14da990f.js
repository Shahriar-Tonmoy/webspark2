(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [961], {
        3348: function (s, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/application", function () {
                return a(6035)
            }])
        },
        8238: function (s, e, a) {
            "use strict";
            var i = a(5893);
            a(7294);
            var n = a(1664),
                t = a.n(n),
                l = a(1163),
                c = a(5823);
            e.Z = s => {
                let {
                    title: e
                } = s, a = (0, l.useRouter)(), n = s => a.pathname === s;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "banner-area",
                        children: (0, i.jsxs)("div", {
                            className: "settings-area",
                            children: [(0, i.jsx)("h3", {
                                className: "title",
                                children: e
                            }), (0, i.jsx)("ul", {
                                className: "user-nav",
                                children: c && c.navDashboardItem.slice(0, 7).map((s, e) => (0, i.jsx)("li", {
                                    children: (0, i.jsx)(t(), {
                                        href: s.link,
                                        className: n(s.link) ? "active" : "",
                                        children: (0, i.jsx)("span", {
                                            children: "Profile" === s.text ? "Profile Details" : s.text
                                        })
                                    })
                                }, e))
                            })]
                        })
                    })
                })
            }
        },
        6035: function (s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function () {
                    return j
                }
            });
            var i = a(5893);
            a(7294);
            var n = a(3709),
                t = a(7177),
                l = a(4953),
                c = a(345),
                r = a(2610),
                d = a(5675),
                h = a.n(d),
                o = a(8851),
                x = a(8238),
                m = () => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "rbt-main-content mr--0 mb--0",
                        children: (0, i.jsx)("div", {
                            className: "rbt-daynamic-page-content center-width",
                            children: (0, i.jsxs)("div", {
                                className: "rbt-dashboard-content",
                                children: [(0, i.jsx)(x.Z, {
                                    title: "Applications"
                                }), (0, i.jsx)("div", {
                                    className: "content-page pb--50",
                                    children: (0, i.jsx)("div", {
                                        className: "chat-box-list",
                                        children: (0, i.jsxs)("div", {
                                            className: "single-settings-box sessions-box top-flashlight light-xl leftside overflow-hidden",
                                            children: [(0, i.jsxs)("div", {
                                                className: "section-title d-flex justify-content-between",
                                                children: [(0, i.jsx)("h4", {
                                                    className: "title",
                                                    children: "Application"
                                                }), (0, i.jsxs)("button", {
                                                    className: "btn-default btn-small round",
                                                    children: ["Add apps ", (0, i.jsx)("i", {
                                                        className: "feather-plus"
                                                    })]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "rbt-sm-separator mt-0"
                                            }), (0, i.jsxs)("div", {
                                                className: "list-card-grp",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "toolbar d-flex",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, i.jsx)("i", {
                                                            className: "feather-info"
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "desc",
                                                        children: "You accessed the system from two distinct devices utilizing separate web browsers..."
                                                    })]
                                                }), o && o.applications.map((s, e) => (0, i.jsx)("div", {
                                                    className: "list-card style-two",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "inner",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "left-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "img-section",
                                                                children: (0, i.jsx)(h(), {
                                                                    src: s.img,
                                                                    width: 40,
                                                                    height: 40,
                                                                    alt: "Browser Icon"
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "content-section",
                                                                children: [(0, i.jsx)("h6", {
                                                                    className: "title",
                                                                    children: s.title
                                                                }), (0, i.jsx)("p", {
                                                                    className: "b4",
                                                                    children: s.version
                                                                })]
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "right-content",
                                                            children: (0, i.jsxs)("button", {
                                                                className: "btn-default btn-border round",
                                                                children: [(0, i.jsx)("i", {
                                                                    className: "feather-trash-2"
                                                                }), " Remove"]
                                                            })
                                                        })]
                                                    })
                                                }, e))]
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }),
                j = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n.default, {
                        title: "Applications"
                    }), (0, i.jsx)("main", {
                        className: "page-wrapper rbt-dashboard-page",
                        children: (0, i.jsx)(t.ZP, {
                            children: (0, i.jsxs)("div", {
                                className: "rbt-panel-wrapper",
                                children: [(0, i.jsx)(l.Z, {
                                    display: "d-none"
                                }), (0, i.jsx)(c.Z, {}), (0, i.jsx)(r.Z, {}), (0, i.jsx)(m, {})]
                            })
                        })
                    })]
                })
        }
    },
    function (s) {
        s.O(0, [675, 996, 691, 899, 851, 774, 888, 179], function () {
            return s(s.s = 3348)
        }), _N_E = s.O()
    }
]);
//# sourceMappingURL=application-e548033d14da990f.js.map