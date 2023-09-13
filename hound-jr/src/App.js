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
                    className="btn-block"
                />
                <div className="button-add-on">
                    <button id="dodat" title="Search"></button>
                </div>
            </div>
            <div id="inb">
                <div id="advanced">
                    <span className="hide-adv"></span>

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
                                {}
                            </select>
                        </div>
                    </div>

                    <div className="ban">
                        <em>Advanced:</em> ignore case, filter by path, stuff
                        like that.
                    </div>
                </div>
            </div>

            {/* <div id="ina">
                <input
                    id="q"
                    type="text"
                    placeholder="Search by Regexp"
                    aria-label="Search by Regexp"
                    ref="q"
                    autocomplete="off"
                    onKeyDown={this.queryGotKeydown}
                    onFocus={this.queryGotFocus}
                />
                <div className="button-add-on">
                    <button
                        id="dodat"
                        title="Search"
                        onClick={this.submitQuery}
                    ></button>
                </div>
            </div> */}

            {/* <div className="field">
                <label className="multiselect_label" htmlFor="repos">
                    Select Repo
                </label>
                <div className="field-input">
                    <select
                        id="repos"
                        className="form-control multiselect"
                        multiple={true}
                        size={Math.min(16, repoCount)}
                        ref="repos"
                    >
                        {repoOptions}
                    </select>
                </div>
            </div> */}
        </div>
    );
}

export default App;
