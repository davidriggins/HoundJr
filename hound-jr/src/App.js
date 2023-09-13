import { useRef } from "react";

// var css = function (el, n, v) {
//     el.style.setProperty(n, v, "");
// };

function App() {
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
