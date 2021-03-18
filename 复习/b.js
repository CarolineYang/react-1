const b = require('./a');
// console.log(b)
module.exports = b
{
    "version": "1.0.0",
    "utils": [
    {
        "name": "AmapLog",
        "type": "ajx",
        "content": {
            "package": "amap_bundle_framework",
            "main": "path://amap_bundle_framework/src/amaplog/CLAmapLog.js",
            "exportName": "AmapLog",
            "subName": "",
            "destructuring": false
        }
    },
    {
        "name": "EventManager",
        "type": "ajx",
        "content": {
            "package": "amap_bundle_framework",
            "main": "path://amap_bundle_framework/src/smart-ui/render-engine/EventManager.js",
            "exportName": "EventManager",
            "subName": "",
            "destructuring": false
        }
    },
    {
        "name": "ajax",
        "type": "ajx",
        "content": {
            "package": "amap_bundle_framework",
            "main": "path://amap_bundle_framework/src/network/ajax/CLNetwork.js",
            "exportName": "ajax",
            "subName": "",
            "destructuring": true
        }
    }
],
    "componentsMap": [],
    "componentsTree": [
    {
        "componentName": "Page",
        "props": {},
        "state": {},
        "lifeCycles": {},
        "condition": true,
        "loopArgs": [
            "item",
            "index"
        ],
        "children": [
            {
                "componentName": "div",
                "props": {
                    "class": "mod",
                    "style": {
                        "width": "100%",
                        "height": "337px"
                    }
                },
                "rect": {
                    "x": 0,
                    "y": 0,
                    "width": 716,
                    "height": 337
                },
                "smart": {},
                "artboardImg": "https://img.alicdn.com/imgextra/i3/O1CN01c2t9lW1v3dOXudPJK_!!6000000006117-2-tps-716-337.png",
                "fileName": "index",
                "condition": true,
                "loopArgs": [
                    "item",
                    "index"
                ],
                "children": [
                    {
                        "componentName": "div",
                        "props": {
                            "class": "box",
                            "style": {
                                "display": "flex",
                                "align-items": "flex-start",
                                "flex-direction": "column",
                                "border-radius": "24px",
                                "background-color": "#FFFFFF",
                                "width": "716px",
                                "height": "337px",
                                "margin": "15px"
                            }
                        },
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "width": 716,
                            "height": 337
                        },
                        "smart": {},
                        "selfId": "CB7A6811-0E3B-495A-BF10-BFEAD73E8337",
                        "condition": true,
                        "loopArgs": [
                            "item",
                            "index"
                        ],
                        "children": [
                            {
                                "componentName": "div",
                                "props": {
                                    "class": "bd",
                                    "style": {
                                        "display": "flex",
                                        "position": "relative",
                                        "align-items": "center",
                                        "flex-direction": "row",
                                        "margin-top": "24px",
                                        "margin-left": "24px",
                                        "height": "40px"
                                    }
                                },
                                "rect": {
                                    "x": 24,
                                    "y": 24,
                                    "width": 303,
                                    "height": 40
                                },
                                "smart": {},
                                "condition": true,
                                "loopArgs": [
                                    "item",
                                    "index"
                                ],
                                "children": [
                                    {
                                        "componentName": "label",
                                        "props": {
                                            "lines": 1,
                                            "class": "title",
                                            "text": "吃喝玩乐在三亚",
                                            "style": {
                                                "margin-right": "8px",
                                                "line-height": "28px",
                                                "color": "#000000",
                                                "font-size": "28px",
                                                "font-weight": "bold",
                                                "align-self": "center"
                                            }
                                        },
                                        "rect": {
                                            "x": 24,
                                            "y": 24,
                                            "width": 196,
                                            "height": 40
                                        },
                                        "smart": {},
                                        "selfId": "920BF753-CC7A-40B5-B343-A14893743CBE0",
                                        "condition": true,
                                        "loopArgs": [
                                            "item",
                                            "index"
                                        ],
                                        "children": []
                                    },
                                    {
                                        "componentName": "div",
                                        "props": {
                                            "class": "outer",
                                            "style": {
                                                "display": "flex",
                                                "align-items": "center",
                                                "flex-direction": "row",
                                                "justify-content": "center",
                                                "border-radius": "2.744470588235294px",
                                                "background-color": "#FFDEC6",
                                                "width": "99px",
                                                "height": "32px"
                                            }
                                        },
                                        "rect": {
                                            "x": 228,
                                            "y": 28,
                                            "width": 99,
                                            "height": 32
                                        },
                                        "smart": {},
                                        "selfId": "51F4CA6D-D82D-4841-86E0-B49D9AC895F3",
                                        "condition": true,
                                        "loopArgs": [
                                            "item",
                                            "index"
                                        ],
                                        "children": [
                                            {
                                                "componentName": "div",
                                                "props": {
                                                    "class": "wrap",
                                                    "style": {
                                                        "display": "flex",
                                                        "position": "relative",
                                                        "align-items": "center",
                                                        "flex-direction": "row",
                                                        "width": "88px"
                                                    }
                                                },
                                                "rect": {
                                                    "x": 234,
                                                    "y": 33,
                                                    "width": 88,
                                                    "height": 22
                                                },
                                                "smart": {},
                                                "condition": true,
                                                "loopArgs": [
                                                    "item",
                                                    "index"
                                                ],
                                                "children": [
                                                    {
                                                        "componentName": "img",
                                                        "props": {
                                                            "class": "logo",
                                                            "src": "https://img.alicdn.com/imgextra/i4/O1CN01lADHb328vlChrqOmM_!!6000000007995-2-tps-176-44.png",
                                                            "style": {
                                                                "position": "absolute",
                                                                "top": "0px",
                                                                "left": "0px",
                                                                "width": "88px",
                                                                "height": "22px",
                                                                "align-self": "center"
                                                            }
                                                        },
                                                        "rect": {
                                                            "x": 234,
                                                            "y": 33,
                                                            "width": 88,
                                                            "height": 22
                                                        },
                                                        "smart": {},
                                                        "selfId": "61155E9B-379A-4C05-897E-1DB45AC1BE5E",
                                                        "condition": true,
                                                        "loopArgs": [
                                                            "item",
                                                            "index"
                                                        ]
                                                    },
                                                    {
                                                        "componentName": "img",
                                                        "props": {
                                                            "class": "shopCreditLv0",
                                                            "src": "https://img.alicdn.com/imgextra/i3/O1CN01Y8uQIP1PFwKi7yMDH_!!6000000001812-2-tps-100-44.png",
                                                            "style": {
                                                                "position": "relative",
                                                                "margin-left": "16px",
                                                                "width": "50px",
                                                                "height": "22px",
                                                                "align-self": "center"
                                                            }
                                                        },
                                                        "rect": {
                                                            "x": 250,
                                                            "y": 33,
                                                            "width": 50,
                                                            "height": 22
                                                        },
                                                        "smart": {},
                                                        "selfId": "5BEDD4FE-7C15-4C75-84DE-D80F8AE3C46B",
                                                        "condition": true,
                                                        "loopArgs": [
                                                            "item",
                                                            "index"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "componentName": "div",
                                "props": {
                                    "class": "ft",
                                    "style": {
                                        "display": "flex",
                                        "position": "relative",
                                        "align-items": "center",
                                        "align-self": "center",
                                        "flex-direction": "row",
                                        "margin-top": "10px"
                                    }
                                },
                                "rect": {
                                    "x": 24,
                                    "y": 74,
                                    "width": 668,
                                    "height": 239
                                },
                                "smart": {},
                                "condition": true,
                                "loopArgs": [
                                    "item",
                                    "index"
                                ],
                                "children": [
                                    {
                                        "componentName": "div",
                                        "props": {
                                            "class": "block",
                                            "style": {
                                                "display": "flex",
                                                "align-items": "flex-start",
                                                "flex-direction": "column",
                                                "margin-right": "16px"
                                            }
                                        },
                                        "rect": {
                                            "x": 24,
                                            "y": 74,
                                            "width": 212,
                                            "height": 239
                                        },
                                        "smart": {
                                            "layerProtocol": {
                                                "repeat": {
                                                    "type": "repeat",
                                                    "repeatId": "1614241467647113",
                                                    "repeatIndex": "0"
                                                }
                                            }
                                        },
                                        "condition": true,
                                        "loop": {
                                            "type": "JSExpression",
                                            "value": "this.data.test"
                                        },
                                        "loopArgs": [
                                            "item",
                                            "index"
                                        ],
                                        "children": [
                                            {
                                                "componentName": "img",
                                                "props": {
                                                    "class": "entryPic",
                                                    "src": "https://img.alicdn.com/imgextra/i2/O1CN01v05EpW1xrftq6fd9e_!!6000000006497-2-tps-424-320.png",
                                                    "style": {
                                                        "position": "relative",
                                                        "width": "212px",
                                                        "height": "160px",
                                                        "align-self": "flex-start"
                                                    }
                                                },
                                                "rect": {
                                                    "x": 24,
                                                    "y": 74,
                                                    "width": 212,
                                                    "height": 160
                                                },
                                                "smart": {},
                                                "selfId": "525B0EEC-D9DB-42AF-8BA5-1CE34D257DFC",
                                                "condition": true,
                                                "loopArgs": [
                                                    "item",
                                                    "index"
                                                ]
                                            },
                                            {
                                                "componentName": "label",
                                                "props": {
                                                    "lines": 1,
                                                    "class": "word",
                                                    "text": {
                                                        "type": "JSExpression",
                                                        "value": "this.item"
                                                    },
                                                    "style": {
                                                        "position": "relative",
                                                        "margin-top": "8px",
                                                        "max-width": "212px",
                                                        "overflow": "hidden",
                                                        "text-overflow": "ellipsis",
                                                        "line-height": "40px",
                                                        "color": "#000000",
                                                        "font-size": "28px",
                                                        "font-weight": "normal",
                                                        "align-self": "flex-start",
                                                        "line-clamp": 1
                                                    }
                                                },
                                                "rect": {
                                                    "x": 24,
                                                    "y": 242,
                                                    "width": 112,
                                                    "height": 40
                                                },
                                                "smart": {},
                                                "selfId": "D0A680B6-14F7-4792-810E-26E82387DDF30",
                                                "condition": true,
                                                "loopArgs": [
                                                    "item",
                                                    "index"
                                                ],
                                                "children": []
                                            },
                                            {
                                                "componentName": "label",
                                                "props": {
                                                    "lines": 1,
                                                    "class": "info",
                                                    "text": "40.7万人导航来过",
                                                    "style": {
                                                        "position": "relative",
                                                        "margin-top": "3px",
                                                        "max-width": "212px",
                                                        "overflow": "hidden",
                                                        "text-overflow": "ellipsis",
                                                        "line-height": "28px",
                                                        "color": "#ff5e33",
                                                        "font-size": "24px",
                                                        "font-weight": "normal",
                                                        "align-self": "flex-start",
                                                        "line-clamp": 1
                                                    }
                                                },
                                                "rect": {
                                                    "x": 24,
                                                    "y": 285,
                                                    "width": 193,
                                                    "height": 28
                                                },
                                                "smart": {},
                                                "selfId": "568B20E6-EEE9-4487-A554-1C08B5FDB88B0",
                                                "condition": true,
                                                "loopArgs": [
                                                    "item",
                                                    "index"
                                                ],
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "componentName": "label",
                "props": {
                    "text": "文字",
                    "style": {}
                },
                "condition": true,
                "loopArgs": [
                    "item",
                    "index"
                ],
                "children": []
            },
            {
                "componentName": "list",
                "props": {
                    "indicator": true,
                    "scrollsToTop": true,
                    "scrollable": true,
                    "style": {}
                },
                "condition": true,
                "loopArgs": [
                    "item",
                    "index"
                ],
                "children": []
            }
        ],
        "dataSource": {
            "list": []
        }
    }
],
    "dataSource": {},
    "s@i#g&n": "152678717"
}