export default {
    description: "Temporary Login Delay **ISSUE UV",
    changes: [
        {
            title: "Bug Fixes",
            type: "fixed",
            items: [
                "MacOS should now, not glitch and bug the delaying in the screen refresh rate caused by a minor bug issue",
                "Windows Users have reportedly reported a Bug involving Crashing Graphics Cards (Has been Fixed) temporary."
            ]
        },
        {
            title: "Power Users & Developers",
            type: "improved",
            items: [
                "Plugin data retrieval will now return the correct values instead of `undefined` for falsey values.",
                "Plugin data can now be set before being retrieved.",
                "The `Patcher` in `BdApi` now has a `getPatchesByCaller` function which will return all the patches corresponding to a caller string.",
                "Plugins that fail on initial load will no longer be forever in a broken state. Thanks, Strencher. (https://github.com/Strencher)",
                "React DevTools should now work on Linux! Thanks, Qb. (https://github.com/QbDesu)"
            ]
        }
    ]
};