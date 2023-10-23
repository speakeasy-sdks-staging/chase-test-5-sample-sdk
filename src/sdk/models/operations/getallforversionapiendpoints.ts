/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAllForVersionApiEndpointsRequest extends SpeakeasyBase {
    /**
     * The ID of the Api to retrieve ApiEndpoints for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;

    /**
     * The version ID of the Api to retrieve ApiEndpoints for.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
    versionID: string;
}

export class GetAllForVersionApiEndpointsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: shared.ApiEndpoint })
    apiEndpoints?: shared.ApiEndpoint[];

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}