[
    'module-resolver',
    {
        root: ['.'],
        alias: {
            "src": "./src/*",
            "models/*": "./src/types/*",
            "components/*": "./src/components/*",
            "services/*": "./src/services/*",
            "store/*": "./src/store/*",
            "utils/*": "./src/utils/*",
            "screens/*": "./src/screens/*",
            "theme/*": "./src/theme/*",
            "navigation/*": "./src/routes/*"
        }
    }
]


"baseUrl": ".",
"paths": {
    "*": ["./src/*"],
    "models/*": ["./src/types/*"],
    "components/*": ["./src/components/*"],
    "services/*": ["./src/services/*"],
    "store/*": ["./src/store/*"],
    "utils/*": ["./src/utils/*"],
    "screens/*": ["./src/screens/*"],
    "theme/*": ["./src/theme/*"],
    "navigation/*": ["./src/routes/*"]
}