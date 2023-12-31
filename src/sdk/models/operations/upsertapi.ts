/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpsertApiRequest extends SpeakeasyBase {
    /**
     * A JSON representation of the Api to upsert
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    apiInput: shared.ApiInput;

    /**
     * The ID of the Api to upsert.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
    apiID: string;
}

export class UpsertApiResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    api?: shared.Api;

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
