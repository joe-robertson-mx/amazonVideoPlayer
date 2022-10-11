import { Viewport } from "@iot-app-kit/core";
import { getEnvCredentials } from "./getEnvCredentials";

export const awsCredentials = getEnvCredentials();

// The pre-configured values below is based on the sample workspace created from
// https://github.com/aws-samples/aws-iot-twinmaker-samples, update them for your own workspace.
export const region = "us-east-1";
export const workspaceId = "CookieFactory";

// Video Player

/**
 * Simple Mode
 * Specify the video stream name to stream video directly from Kinesis Video Streams
 */
export const kvsStreamName = "<your-kvs-stream-name>";

/**
 * AWS IoT TwinMaker Mode
 * Specify videoEntityId and videoComponentName from AWS IoT TwinMaker workspace
 */
export const videoEntityId = undefined;
export const videoComponentName = undefined;

/**
 * Specify time range for the video player
 */
export const videoViewport: Viewport = {
    // Live video playback - use duration
    duration: "0"
    // On-Demand video playback - specify start and end time for video
    /*
   start: new Date('<your-start-time>'),
   end: new Date('<your-end-time>'),
   */
};
