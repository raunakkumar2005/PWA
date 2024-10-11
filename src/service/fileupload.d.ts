export interface FileType {
    uri: string;
    type: string;
    name: string;
    height?: number;
    width?: number;
}
export declare const UploadKycFiles: (files: {
    [key: string]: FileType;
}) => Promise<any>;
export declare const UploadMultipleFiles: (id: string, files: {
    [key: string]: FileType[];
}) => Promise<any>;
