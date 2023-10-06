import mixpanel from "mixpanel-browser";

export class MixpanelTraking {
    private static _instance: MixpanelTraking;

    public static getIntance(): MixpanelTraking {
        if (MixpanelTraking._instance == null)
            return (MixpanelTraking._instance = new MixpanelTraking());

        return this._instance;
    }

    public constructor() {
        if (MixpanelTraking._instance)
            throw new Error('Error: Instance creation of MixpanelTraking is not allowed. Use MixPanel.getIntence instead ');

        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANELTOKEN || "", {
            debug: true,
            ignore_dnt: true,
        });
    }

    protected track(name: string, data: object = {}) {
        mixpanel.track(name, data);
    }

    public pageViewed() {
        this.track("page_viewed")
    }

    public citationGenerated(from: string) {
        this.track("citationGenerated", {
            source: from
        })
    }


}