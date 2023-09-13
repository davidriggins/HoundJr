import { useEffect } from "react";
import { reqwest } from "reqwest";

// var css = function (el, n, v) {
//     el.style.setProperty(n, v, "");
// };

function App() {
    useEffect(() => {});

    const fetchUserRepos = () => {
        var repos;

        // reqwest({
        //     url: "api/v1/repos",
        //     type: "json",
        //     success: function (data) {
        //         repos = data;
        //         //next();
        //     },
        //     error: function (xhr, status, err) {
        //         console.error(err);
        //     },
        // });
    };
    return (
        <div className="container">
            <div id="ina">
                <input
                    id="q"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    autoComplete="off"
                />
                <div className="button-add-on">
                    <button id="dodat" title="Search"></button>
                </div>
            </div>
            <div className="field">
                <label className="multiselect_label" htmlFor="repos">
                    Select Repo
                </label>
                <div className="field-input">
                    <select
                        id="repos"
                        className="form-control multiselect"
                        multiple={true}
                        size={Math.min(16, 10)}
                    >
                        {"Hi"}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default App;
