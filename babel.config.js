export default async () => {
    return {
        env: {
            test: {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                node: "current",
                            },
                        },
                    ],
                ],
            },
        },
    };
};
