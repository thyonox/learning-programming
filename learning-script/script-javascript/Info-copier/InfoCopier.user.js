// ==UserScript==
// @name         InfoCopier
// @namespace    Thyonix
// @version      3.0.0
// @description  为复制 Jable、Missav、NJav 视频封面提供便利，支持一键复制封面到剪贴板，支持一键跳转到 Missav 视频页面。
// @icon64       https://s21.ax1x.com/2024/10/20/pAa1hOP.png
// @author       Thyonix
// @license      MIT
// @tag          18+
// @tag          utilities
// @run-at       document-idle
// @match        https://jable.tv/videos/*
// @match        https://missav.ai/dm*/cn/*
// @match        https://missav.ai/cn/*
// @match        https://www.njav.com/*/xvideos/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_log
// @grant        GM_notification
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @connect      self
// @connect      assets-cdn.jable.tv
// @connect      fivetiu.com
// @connect      api.notion.com
// @resource     custom file:///E:/Documents\WorkSpace/learning-programming/learning-script/script-javascript/Info-copier/style.css
// @updateURL    https://
// @downloadURL  https://
// ==/UserScript==

(function () {
    'use strict';

    const NOTION_KEY = '';
    const NOTION_DATABASE_ID = '';
    const NOTION_VERSION = '';

    // 引入 Vue3
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.src = "https://cdn.jsdelivr.net/npm/vue@3.5.12/dist/vue.global.min.js";
    document.documentElement.appendChild(script);

    // 引入 elementPlus 样式
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.href = "https://unpkg.com/element-plus/dist/index.css";
    document.documentElement.appendChild(link);

    // 引入 elementPlus 组件
    let elscript = document.createElement('script');
    elscript.setAttribute('type', 'text/javascript');
    elscript.src = "https://unpkg.com/element-plus";
    document.documentElement.appendChild(elscript);

    // 引入 remixicon 图标
    let remixiconLink = document.createElement('link');
    remixiconLink.setAttribute('rel', 'stylesheet');
    remixiconLink.href = "https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css";
    document.documentElement.appendChild(remixiconLink);

    // 引入自定义 CSS
    const customCSS = GM_getResourceText('custom');
    GM_addStyle(customCSS);

    // 挂载一个空 Vue app（只为了可用 Element Plus 的全局 API）
    window.onload = () => {
        const app = Vue.createApp({});
        app.use(ElementPlus);
    }
    //-----------------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------
    // 外层容器
    
    
    const container = document.createElement('div');
    container.className = 'info-copier-container';
    document.body.appendChild(container);

    //logo
    const logo = document.createElement('img');
    logo.className = 'info-copier-logo';
    logo.src = 'https://s21.ax1x.com/2024/10/20/pAa1hOP.png';
    logo.alt = 'InfoCopier Logo';
    container.appendChild(logo);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'info-copier-button-container';
    container.appendChild(buttonContainer);

    // toMiss按钮
    const toMiss = document.createElement('button');
    toMiss.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>';
    buttonContainer.appendChild(toMiss);

    // 复制URL按钮
    const url = document.createElement('button');
    url.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"></path></svg>';
    buttonContainer.appendChild(url);

    // 复制视频编号按钮
    const number = document.createElement('button');
    number.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z"></path></svg>';
    buttonContainer.appendChild(number);

    // 复制封面按钮
    const cover = document.createElement('button');
    cover.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>';
    buttonContainer.appendChild(cover);

    const notion = document.createElement('button');
    notion.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.2852 2.95494C15.9283 2.71702 15.5011 2.60764 15.0738 2.6448L4.01455 3.60647C3.50353 3.65091 3.11133 4.0787 3.11133 4.59164L3.11133 16.1666C3.11133 16.5753 3.24389 16.973 3.48911 17.3L6.25617 20.9894C6.45903 21.2599 6.78602 21.4079 7.12313 21.382L19.9761 20.3933C20.4913 20.3537 20.8891 19.9241 20.8891 19.4074V6.52672C20.8891 6.2128 20.7322 5.91965 20.471 5.74551L16.2852 2.95494ZM15.2278 4.41589C15.2529 4.41371 15.278 4.42014 15.299 4.43414L18.0448 6.26466L7.8385 7.08117L5.97759 5.22026L15.2278 4.41589ZM19.1113 18.6768L8.38911 19.5016V8.82058L19.1113 7.9628V18.6768ZM4.88911 6.64593L6.61133 8.36815L6.61133 18.5L4.91133 16.2333C4.8969 16.2141 4.88911 16.1907 4.88911 16.1666L4.88911 6.64593ZM11.9786 10.1234L10.0022 10.2529V17.8154L11.9979 17.6846V13.3479L15.5098 17.5169L17.4861 17.3874V9.82491L15.4904 9.95571V14.2924L11.9786 10.1234Z"></path></svg>';
    buttonContainer.appendChild(notion);

    // toMiss 按钮事件
    toMiss.addEventListener('click', () => {
        window.open('https://missav.ai/cn/search/' + window.location.pathname.split('/')[2]);
    });

    // 复制 URL 按钮事件
    const websiteUrl = window.location.href;
    url.addEventListener('click', () => {
        navigator.clipboard.writeText(websiteUrl)
            .then(() => {
                notification('URL 已复制到剪贴板!');
            })
            .catch((err) => {
                notification('复制 URL 时发生错误: ' + err, 'error');
            })
    });

    // 复制视频编号按钮事件
    let videoId = document.querySelector('.header-left h4').innerText.split(' ')[0];
    let videoName = document.querySelector('.header-left h4').innerText.split(' ').slice(1, -1).join(' ');
    number.addEventListener('click', () => {
        navigator.clipboard.writeText(videoId)
            .then(() => {
                notification('视频编号已复制到剪贴板!');
            })
            .catch((err) => {
                notification('复制视频编号时发生错误: ' + err, 'error');
            });
    });

    // 复制封面按钮事件
    cover.addEventListener('click', () => {
        requestSend(document.querySelector('div video').getAttribute('poster'));
    });

    // 发送跨域请求
    function requestSend(imgURL) {
        if (imgURL === null) {
            notification('属性已更改，等待更新！', 'error');
            return;
        }
        GM_xmlhttpRequest({
            method: 'GET',
            url: imgURL,
            responseType: 'blob', // 请求返回 Blob 数据
            onload: function (response) {
                if (response.status === 200) {
                    const blob = response.response;
                    const mimeType = blob.type; // 获取 Blob 的 MIME 类型
                    if (mimeType === 'image/jpeg') {
                        convertImageToPng(blob);  // 将 jpeg 转换为 png
                    } else {
                        copyImageToClipboard(blob, mimeType);  // 将其他类型的图片复制到剪贴板
                    }
                } else {
                    notification('无法获取图片资源!', 'error');
                }
            },
            onerror: function () {
                notification('请求图片发生错误，查看网络连接！', 'error');
            }
        });
    }

    // 将图片 Blob 复制到剪贴板的函数
    function copyImageToClipboard(blob, mimeType) {
        const item = new ClipboardItem({ [mimeType]: blob });
        navigator.clipboard.write([item]).then(function () {
            notification('封面已复制到剪贴板!');
        }, function (err) {
            notification('复制封面时发生错误:' + err, 'error');
        });
    }

    // 将 JPEG 转换为 PNG 后复制到剪贴板
    function convertImageToPng(blob) {
        console.log('Converting JPEG to PNG...');
        const img = new Image();
        const url = URL.createObjectURL(blob);
        img.src = url;

        img.onload = function () {
            // 创建 Canvas 元素
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            // 在 Canvas 上绘制图像
            ctx.drawImage(img, 0, 0);
            // 将 Canvas 转换为 PNG Blob
            canvas.toBlob(function (pngBlob) {
                copyImageToClipboard(pngBlob, 'image/png');  // 将 PNG 复制到剪贴板
            }, 'image/png');
            // 释放 Object URL
            URL.revokeObjectURL(url);
        };
    }

    // 通知函数
    function notification(message, type = 'success') {
        try {
            ElementPlus.ElNotification({
            title: 'InfoCopier通知:',
            message,
            type,
            duration: 2000,
        });
        } catch (error) {
            GM_notification({
                title: 'InfoCopier通知:',
                text: message
            })
        }
    }

    notion.addEventListener('click', () => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: 'https://api.notion.com/v1/pages',
            headers: {
                'Authorization': `Bearer ${NOTION_KEY}`,
                'Notion-Version': NOTION_VERSION,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                parent: {
                    database_id: NOTION_DATABASE_ID
                },
                properties: {
                    ID: {
                        title: [
                            {
                                text: {
                                    content: videoId,
                                },
                            },
                        ],
                    },
                    MainGroup: {
                        select: {
                            name: '有码JAV',
                        }
                    },
                    Title: {
                        rich_text: [
                            {
                                text: {
                                    content: videoName,
                                }
                            }
                        ],
                    },
                },
                children: [
                    {
                        object: "block",
                        type: "image",
                        image: {
                            type: "external",
                            external: {
                                url: document.querySelector('div video').getAttribute('poster'),
                            }
                        }
                    },
                    {
                        object: "block",
                        type: "callout",
                        callout: {
                            rich_text: [
                                {
                                    type: "text",
                                    text: {
                                        content: "播放渠道：",
                                    },
                                    annotations: {
                                        "bold": true,
                                        "color": "red"
                                    }
                                },
                                {
                                    type: "text",
                                    text: {
                                        content: "\n",   // 这里是换行
                                        link: null
                                    }
                                },
                                {
                                    type: "text",
                                    text: {
                                        content: websiteUrl,
                                        link: {
                                            url: websiteUrl
                                        }
                                    }
                                }
                            ],
                            color: "purple_background"
                        }
                    },
                    {
                        object: "block",
                        heading_1: {
                            rich_text: [
                                {
                                    text: {
                                        content: 'Preview',
                                    },
                                },
                            ],
                        },
                    },
                ],
            }),
            onload: function (res) {
                notification('Notion 页面已创建！');
            },
            onerror: function (err) {
                notification('创建 Notion 页面时发生错误: ' + err, 'error');
            }
        });
    })
})();
