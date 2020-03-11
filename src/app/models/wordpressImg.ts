

    export interface Guid {
        rendered: string;
    }

    export interface Title {
        rendered: string;
    }

    export interface Meta {
        amp_status: string;
    }

    export interface Description {
        rendered: string;
    }

    export interface Caption {
        rendered: string;
    }

    export interface Thumbnail {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Medium {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface MediumLarge {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Large {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface PostThumbnail {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Full {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Sizes {
        thumbnail: Thumbnail;
        medium: Medium;
        medium_large: MediumLarge;
        large: Large;
        post_thumbnail: PostThumbnail;
        full: Full;
    }

    export interface ImageMeta {
        aperture: string;
        credit: string;
        camera: string;
        caption: string;
        created_timestamp: string;
        copyright: string;
        focal_length: string;
        iso: string;
        shutter_speed: string;
        title: string;
        orientation: string;
        keywords: any[];
    }

    export interface MediaDetails {
        width: number;
        height: number;
        file: string;
        sizes: Sizes;
        image_meta: ImageMeta;
    }

    export interface Self {
        href: string;
    }

    export interface Collection {
        href: string;
    }

    export interface About {
        href: string;
    }

    export interface Author {
        embeddable: boolean;
        href: string;
    }

    export interface Reply {
        embeddable: boolean;
        href: string;
    }

    export interface Links {
        self: Self[];
        collection: Collection[];
        about: About[];
        author: Author[];
        replies: Reply[];
    }

    export interface WordpressImg {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        status: string;
        type: string;
        link: string;
        title: Title;
        author: number;
        comment_status: string;
        ping_status: string;
        template: string;
        meta: Meta;
        description: Description;
        caption: Caption;
        alt_text: string;
        media_type: string;
        mime_type: string;
        media_details: MediaDetails;
        post: number;
        source_url: string;
        _links: Links;
    }

