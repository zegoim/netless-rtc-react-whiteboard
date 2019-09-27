import { Config } from "../common/zego.entity";
import { Logger } from "../common/zego.logger";
export declare class ClientUtil {
    static checkConfigParam(option: Config, logger: Logger): boolean;
    static checkLoginParam(roomid: string, token: string): boolean;
    static registerCallback(fName: any, option: {
        success?: Function;
        error?: Function;
    }, callbackList: {
        [index: string]: Function;
    }): void;
    static actionErrorCallback(fName: string, callbackList: {
        [index: string]: Function;
    }): Function;
    static actionSuccessCallback(fName: any, callbackList: {
        [index: string]: Function;
    }): Function;
    /**
     错误管理
     */
    static getServerError(code: any): {
        code: string;
        msg: string;
    };
    static isKeepTryLogin(code: number): boolean;
    static mergeStreamList(logger: Logger, idName: string, oldStreamList: any[], newStreamList: any[], callbackResult: any): void;
    static checkCustomCommandParam(param: {
        dest_id_name: string[];
        custom_msg: string;
    }): boolean;
    static generateRandumNumber(maxNum: number): number;
    static uuid(len?: number, radix?: number): string;
    static isSupportWebrtc(): boolean;
    static isSupportH264(sucCall: any, errCall: any): void;
    static inlineWorker(func: Function): Worker;
}
