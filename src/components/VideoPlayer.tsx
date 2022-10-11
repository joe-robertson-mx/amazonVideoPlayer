import { ReactElement, createElement } from "react";
import { VideoPlayer } from "@iot-app-kit/react-components";
import { dataSource } from "../dataSource";
import { kvsStreamName, videoEntityId, videoComponentName, videoViewport } from "../configs";
const videoData = dataSource.videoData({
    kvsStreamName,
    entityId: videoEntityId,
    componentName: videoComponentName
});

export const VideoPlayerComponent = (): ReactElement => {
    return (
        <div className="VideoPlayerComponent">
            <VideoPlayer videoData={videoData} viewport={videoViewport} />
        </div>
    );
};

export default VideoPlayerComponent;
