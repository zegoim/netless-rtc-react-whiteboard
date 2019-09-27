import { MediaStreamConstraints } from '../common/zego.entity';
import { Logger } from '../common/zego.logger';
export declare class ZegoPreview {
    private log;
    logger: Logger;
    localVideo: any;
    localStream: MediaStream;
    videoInfo: {};
    previewSuc: boolean;
    constructor(log: Logger);
    getMediaStreamConstraints(mediaStreamConfig: MediaStreamConstraints): {
        audio: any;
        video: any;
    };
    startPreview(localVideo: HTMLElement, mediaStreamConfig: MediaStreamConstraints, successCallback: Function, errorCallback: Function): void;
    captureStream(localVideo: HTMLElement): boolean;
    stopPreview(): void;
    enableMicrophone: (enable: boolean) => boolean;
    enableCamera: (enable: boolean) => boolean;
    setAudioDestination: (audioOutput: any) => boolean;
}
