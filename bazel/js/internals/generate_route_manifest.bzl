load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary", "npm_package_bin")

def generate_route_manifest(name, data):
    """
    Generates a json file that is a representation of all routes

    Args:
        - name: name of the invocation
        - data: the sources from the //src/routes rule to be used in the script
    Returns the generated manifest
    """

    nodejs_binary(
        name = "bin",
        data = [
            "//bazel/js/internals/routes:generate_route_manifest_script",
        ],
        entry_point = "//bazel/js/internals/routes:generate_route_manifest_script",
    )

    npm_package_bin(
        name = "route_manifest",
        tool = ":bin",
        data = data,
        stdout = "route.manifest.json",
        visibility = ["//visibility:public"],
    )
