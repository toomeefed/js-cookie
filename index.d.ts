// Type definitions for js-cookie 2.2
// Project: https://github.com/js-cookie/js-cookie
// Definitions by: Theodore Brown <https://github.com/theodorejb>
//                 BendingBender <https://github.com/BendingBender>
//                 Antoine Lépée <https://github.com/alepee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Cookies {
    interface CookieAttributes {
        /**
         * 有效期，字符串表达式
         * 如 10s, 10m, 2d, 1y 格式
         * 格式: y: 年, M: 月, d: 日, h: 时, m: 分, s: 秒
         */
        expires?: number | string;

        /**
         * cookie 路径。默认 '/'
         */
        path?: string;

        /**
         * 域，默认当前域
         */
        domain?: string;

        /**
         * 是否 https，默认 false
         */
        secure?: boolean;
    }

    interface CookiesStatic<T extends object = object> {
        /**
         * 默认属性
         */
        defaults: CookieAttributes;

        /**
         * 设置 cookie
         */
        set(name: string, value: string | T, options?: CookieAttributes): void;

        /**
         * 读取 cookie
         */
        get(name: string): string | undefined;

        /**
         * 读取全部 cookie
         */
        get(): {[key: string]: string};

        /**
         * 读取 cookie，json 格式
         */
        getJSON(name: string): any;

        /**
         * 读取全部 cookie，json 格式
         */
        getJSON(): {[key: string]: any};

        /**
         * 删除 cookie
         */
        remove(name: string, options?: CookieAttributes): void;

        /**
         * 释放控制权，类似 jq
         */
        noConflict?(): CookiesStatic<T>;
    }
}

declare const Cookies: Cookies.CookiesStatic;

export = Cookies;
export as namespace Cookies;
