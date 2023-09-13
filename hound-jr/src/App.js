import { useEffect } from 'react';
import RepoOption from './components/RepoOption';

// var css = function (el, n, v) {
//     el.style.setProperty(n, v, "");
// };

function App() {
    const getRepoOptions = () => {
        const repos = [
            '3rdparty/scene-layer-lib',
            'ArcGISPro/ArcGIS-10.x',
            'ArcGISPro/ArcGISPro',
            'ArcGISPro/ArcSDE',
            'ArcGISPro/BusinessAnalystPro',
            'ArcGISPro/projection-engine-source',
            'ArcGISPro/PS-Products',
            'webgis/arcgis-arcade-java',
            'webgis/arcgis-bds-map-service',
            'webgis/arcgis-data-store',
            'webgis/arcgis-enterprise-devops',
            'webgis/arcgis-enterprise-sdk',
            'webgis/arcgis-enterprise-security',
            'webgis/arcgis-for-server',
            'webgis/arcgis-for-server-supportfiles',
            'webgis/arcgis-geoanalytics-extension',
            'webgis/arcgis-geoevent',
            'webgis/arcgis-geometry-library',
            'webgis/arcgis-identitystore-library',
            'webgis/arcgis-java-sql-parser',
            'webgis/arcgis-knowledge-service',
            'webgis/arcgis-objectstore-client',
            'webgis/arcgis-online-java-mtsds',
            'webgis/arcgis-manager',
            'webgis/arcgis-mission-server',
            'webgis/arcgis-notebook-server',
            'webgis/arcgis-pbf',
            'webgis/arcgis-portal-onpremises-framework',
            'webgis/arcgis-server-login',
            'webgis/arcgis-spatiotemporal',
            'webgis/arcgis-video-server',
            'webgis/arcgis-webadaptor',
            'webgis/enterprise-build-admin',
            'webgis/carbon',
            'webgis/endeavour',
        ];

        var repoCount = repos.length;
        var repoOptions = [];
        var selected = {};

        repos.forEach(function (repo) {
            selected[repo] = true;
        });

        repos.forEach(function (repoName) {
            repoOptions.push(
                <RepoOption value={repoName} selected={selected[repoName]} />
            );
        });

        return repoOptions;
    };

    useEffect(() => {
        const getPermissions = async () => {
            const permissions = await fetchPermissions();
            console.log(permissions);
        };

        getPermissions();
    }, []);

    const fetchPermissions = async () => {
        const res = await fetch(
            'https://devtopia.esri.com/api/v3/repos/davi2458/qadev/collaborators/davi2458/permission',
            {
                method: 'GET',
                headers: {
                    Authorization:
                        'Bearer 47a773434dd605e7b6f111820fdf4e787ea7ec1d',
                },
            }
        );
        const data = await res.json();

        return data;
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
        <div className='container'>
            <div id='ina'>
                <input
                    id='q'
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                    autoComplete='off'
                />
                <div className='button-add-on'>
                    <button id='dodat' title='Search'></button>
                </div>
            </div>
            <div className='field'>
                <label className='multiselect_label' htmlFor='repos'>
                    Select Repo
                </label>
                <div className='field-input'>
                    <select
                        id='repos'
                        className='form-control multiselect'
                        multiple={true}
                        size={Math.min(16, 10)}
                    >
                        {getRepoOptions()}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default App;
