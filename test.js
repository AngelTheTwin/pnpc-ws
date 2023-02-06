const { tokens } = require("./dist/utils/token");

(async () => {
    console.log(
        await tokens.validateToken(
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkMjlhZTRjNi1mZGZlLTRjNjgtYWEwMS1iZTVjNGMyMTU2OTIiLCJpYXQiOjE2NzU2MjgwMzYsIm5hbWUiOiJ2aWxsYSJ9.zRet7DlfLfsmW9KKdbmV2Mcy9tGhpvy0QLqAot5h2DI"
        )
    );
})();
