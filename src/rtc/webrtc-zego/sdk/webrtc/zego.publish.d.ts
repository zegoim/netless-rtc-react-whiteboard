import { ZegoDataReport } from "../common/zego.datareport";
import { VideoInfo, PlayOption, audioMixConfig } from "../common/zego.entity";
import { ZegoSignal } from "../common/zego.signal";
import { Logger } from "../common/zego.logger";
import { audioMixUtil } from "../util/audioMixUtil";
import { ZegoHTMLAudioElement } from "../../types/index";
export declare class ZegoPublish {
    logger: Logger;
    signal: ZegoSignal;
    state: number;
    sessionId: number;
    waitingICETimeInterval: number;
    waitingAnswerTimeInterval: number;
    candidateInfo: any[];
    waitingICETimer: any;
    waitingAnswerTimer: any;
    qualityTimer: any;
    qualityTimeInterval: number;
    publishQualityList: any[];
    maxQualityListCount: number;
    lastPublishStats: any;
    reportSeq: number;
    dataReport: ZegoDataReport;
    qualityUpload: boolean;
    qualityUploadInterval: number;
    qualityUploadLastTime: number;
    qualitySeq: number;
    maxRetryCount: number;
    currentRetryCount: number;
    retryState: number;
    waitingServerTimerInterval: number;
    waitingServerTimer: any;
    videoInfo: VideoInfo;
    offerSeq: number;
    streamId: string;
    localStream: MediaStream;
    audioMixing: audioMixUtil;
    sessionSeq: number;
    peerConnection: RTCPeerConnection | any;
    qualityCount: number;
    closeSessionSignal: boolean;
    audioBitRate: number;
    localSdpRevert: boolean;
    constructor(log: Logger, signal: ZegoSignal, dataReport: ZegoDataReport, qualityTimeInterval: number);
    private publishStateUpdateError;
    private resetPublish;
    private clearTryPublishTimer;
    private clearPublishQualityTimer;
    private shouldSendCloseSession;
    startPublish(streamId: string, localStream: MediaStream, videoInfo: VideoInfo, playOption?: PlayOption): void;
    onCreatePublishSessionSuccess(data: any): void;
    onCreateOfferSuccess(desc: {
        sdp: any;
    }): void;
    updateBandwidthRestriction(sdp: any, bandwidth: any): any;
    onSetLocalDescriptionSuccess(desc: any): void;
    onRecvMediaDescription(seq: number, sessionId: number, data: any): void;
    onGetRemoteOfferSucceses(desc: string): void;
    onIceConnectionStateChange(event: any): void;
    onIceCandidate(event: any): void;
    sendCandidateInfo(candidateInfo: any[]): void;
    onConnectionStateChange(event: any): void;
    onRecvCandidateInfo(seq: number, sessionId: number, data: any): void;
    onRecvCloseSession(seq: number, sessionId: number, data: any): void;
    onRecvResetSession(seq: number, sessionId: number, data: any): void;
    shouldRetryPublish(): boolean;
    startRetryPublish(): void;
    tryStartPublish(streamId: any): void;
    checkPublishConnectionFailedState(connectionState: any): void;
    setPublishQualityTimer(): void;
    getPublishStats(results: any): void;
    uploadPublishQuality(publishData: any): void;
    stopPublish(): void;
    onPublishStateUpdate(type: any, streamId: any, error?: any): void;
    onPublishQualityUpdate(streamId: any, quality: any): void;
    onDisconnect(): void;
    playEffect(audioMixConfig: audioMixConfig, audioBuffer: AudioBuffer, start?: Function, end?: Function): void;
    pauseEffect(): void;
    resumeEffect(): void;
    startMixingAudio(audio: ZegoHTMLAudioElement, replace: boolean): boolean;
    stopMixingAudio(): boolean;
}