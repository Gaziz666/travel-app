import React, { useState, useEffect } from 'react';
import ReactMapboxGL, { Marker, FullscreenControl, Layer, Feature, Source, Image } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import classes from './MapComponent.module.css';
import { connect } from 'react-redux';
import CountriesService from '../../services/countries-service';
import * as actions from '../../actions/actions-country';
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import { RootStateType } from '../../reducers/root-reducer';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZ2VuZXJhbC1tIiwiYSI6ImNraWozZjdrdjJkbWYycnBlNmw5N3RhNjgifQ.awd7EvjA7RM8Dl4Xb_5dBA'

type MapDispatchToProps = {
    countriesLoaded: (
        value: Array<Countries>,
    ) => actions.CountriesLoadedActionType;
    countrySelect: (value: number) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const MapComponent: React.FC<Props> = ({ countriesLoaded, selectedCountryIndex, countries, selectedLanguage }) => {

    let latitudeCapital = 0;
    let longitudeCapital = 0;

    if (countries.length > 0) {
        latitudeCapital = countries[selectedCountryIndex].coordinate.latitude;
        longitudeCapital = countries[selectedCountryIndex].coordinate.longitude;
    }

    useEffect(() => {
        const countryService = new CountriesService();
        countryService.getAllCountry().then((countries) => {
            countriesLoaded(countries.data);
        });
    }, [countriesLoaded]);


    const [viewport, setViewport] = useState({
        latitude: latitudeCapital,
        longitude: longitudeCapital,
        zoom: 5
    });
    // const layerStyle = {
    //     id: 'anything',
    //     type: 'fill',
    //     paint: {
    //         'fill-color': '#000',
    //         'fill-opacity': 0.4
    //     }
    // };

    const geojson = {
        "_id": "Italy", "type": "Feature", "properties": { "scalerank": 1, "featurecla": "Admin-0 country", "labelrank": 2.0, "sovereignt": "Italy", "sov_a3": "ITA", "adm0_dif": 0.0, "level": 2.0, "type": "Sovereign country", "admin": "Italy", "adm0_a3": "ITA", "geou_dif": 0.0, "geounit": "Italy", "gu_a3": "ITA", "su_dif": 0.0, "subunit": "Italy", "su_a3": "ITA", "brk_diff": 0.0, "name": "Italy", "name_long": "Italy", "brk_a3": "ITA", "brk_name": "Italy", "brk_group": null, "abbrev": "Italy", "postal": "I", "formal_en": "Italian Republic", "formal_fr": null, "note_adm0": null, "note_brk": null, "name_sort": "Italy", "name_alt": null, "mapcolor7": 6.0, "mapcolor8": 7.0, "mapcolor9": 8.0, "mapcolor13": 7.0, "pop_est": 58126212.0, "gdp_md_est": 1823000.0, "pop_year": -99.0, "lastcensus": 2012.0, "gdp_year": -99.0, "economy": "1. Developed region: G7", "income_grp": "1. High income: OECD", "wikipedia": -99.0, "fips_10": null, "iso_a2": "IT", "iso_a3": "ITA", "iso_n3": "380", "un_a3": "380", "wb_a2": "IT", "wb_a3": "ITA", "woe_id": -99.0, "adm0_a3_is": "ITA", "adm0_a3_us": "ITA", "adm0_a3_un": -99.0, "adm0_a3_wb": -99.0, "continent": "Europe", "region_un": "Europe", "subregion": "Southern Europe", "region_wb": "Europe & Central Asia", "name_len": 5.0, "long_len": 5.0, "abbrev_len": 5.0, "tiny": -99.0, "homepart": 1.0 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[15.520376010813834, 38.231155096991472], [15.160242954171736, 37.44404551853782], [15.309897902089006, 37.1342194687318], [15.099988234119451, 36.619987290995397], [14.335228712632016, 36.996630967754754], [13.82673261887993, 37.1045313583802], [12.431003859108813, 37.612949937483819], [12.570943637755136, 38.12638113051969], [13.741156447004585, 38.034965521795357], [14.76124922044616, 38.143873602850505], [15.520376010813834, 38.231155096991472]]], [[[9.210011834356266, 41.209991360024219], [9.809975213264977, 40.500008856766101], [9.669518670295673, 39.177376410471794], [9.214817742559489, 39.240473334300134], [8.806935662479731, 38.906617743478478], [8.428302443077115, 39.171847032216618], [8.388253208050941, 40.378310858718805], [8.15999840661766, 40.950007229163788], [8.709990675500109, 40.899984442705232], [9.210011834356266, 41.209991360024219]]], [[[12.376485223040845, 46.767559109069879], [13.806475457421556, 46.509306138691187], [13.698109978905478, 46.016778062517375], [13.937630242578336, 45.591015936864665], [13.141606479554298, 45.736691799495418], [12.328581170306308, 45.381778062514854], [12.383874952858605, 44.885374253919082], [12.261453484759159, 44.600482082694015], [12.589237094786483, 44.091365871754476], [13.526905958722494, 43.587727362637906], [14.029820997787027, 42.76100779883248], [15.142569614327954, 41.955139675456905], [15.926191033601896, 41.961315009115737], [16.169897088290412, 41.740294908203424], [15.889345737377795, 41.541082261718202], [16.785001661860576, 41.179605617836586], [17.519168735431208, 40.877143459632236], [18.376687452882578, 40.355624904942658], [18.480247023195403, 40.168866278639825], [18.293385044028099, 39.810774441073249], [17.738380161213286, 40.277671006830303], [16.869595981522338, 40.442234605463852], [16.448743116937322, 39.79540070246648], [17.171489698971499, 39.424699815420723], [17.052840610429342, 38.902871202137305], [16.635088331781844, 38.843572496082402], [16.100960727613057, 37.985898749334183], [15.684086948314501, 37.90884918878703], [15.687962680736319, 38.214592800441864], [15.891981235424709, 38.750942491199226], [16.109332309644316, 38.964547024077689], [15.718813510814641, 39.544072374014945], [15.413612501698822, 40.04835683853517], [14.998495721098237, 40.172948716790927], [14.70326826341477, 40.604550279292624], [14.060671827865264, 40.786347968095441], [13.627985060285397, 41.188287258461656], [12.88808190273042, 41.253089504555618], [12.10668257004491, 41.704534817057407], [11.191906365614187, 42.355425319989678], [10.511947869517797, 42.931462510747224], [10.200028924204048, 43.920006822274615], [9.702488234097814, 44.03627879493132], [8.888946160526871, 44.36633616797954], [8.428560825238577, 44.231228135752417], [7.850766635783202, 43.767147935555244], [7.435184767291844, 43.693844916349178], [7.549596388386163, 44.127901109384823], [7.007562290076663, 44.254766750661389], [6.749955275101712, 45.028517971367592], [7.096652459347837, 45.333098863295874], [6.802355177445662, 45.70857982032868], [6.843592970414562, 45.991146552100673], [7.273850945676685, 45.776947740250762], [7.755992058959833, 45.824490057959281], [8.316629672894379, 46.163642483090854], [8.489952426801295, 46.00515086525175], [8.966305779667834, 46.036931871111165], [9.182881707403112, 46.440214748716983], [9.922836541390353, 46.314899400409189], [10.363378126678668, 46.483571275409844], [10.442701450246602, 46.893546250997446], [11.048555942436508, 46.751358547546403], [11.164827915093326, 46.941579494812743], [12.153088006243081, 47.115393174826437], [12.376485223040845, 46.767559109069879]]]] },
        "_id": "Turkey", "type": "Feature", "properties": { "scalerank": 1, "featurecla": "Admin-0 country", "labelrank": 2.0, "sovereignt": "Turkey", "sov_a3": "TUR", "adm0_dif": 0.0, "level": 2.0, "type": "Sovereign country", "admin": "Turkey", "adm0_a3": "TUR", "geou_dif": 0.0, "geounit": "Turkey", "gu_a3": "TUR", "su_dif": 0.0, "subunit": "Turkey", "su_a3": "TUR", "brk_diff": 0.0, "name": "Turkey", "name_long": "Turkey", "brk_a3": "TUR", "brk_name": "Turkey", "brk_group": null, "abbrev": "Tur.", "postal": "TR", "formal_en": "Republic of Turkey", "formal_fr": null, "note_adm0": null, "note_brk": null, "name_sort": "Turkey", "name_alt": null, "mapcolor7": 6.0, "mapcolor8": 3.0, "mapcolor9": 8.0, "mapcolor13": 4.0, "pop_est": 76805524.0, "gdp_md_est": 902700.0, "pop_year": -99.0, "lastcensus": 2000.0, "gdp_year": -99.0, "economy": "4. Emerging region: MIKT", "income_grp": "3. Upper middle income", "wikipedia": -99.0, "fips_10": null, "iso_a2": "TR", "iso_a3": "TUR", "iso_n3": "792", "un_a3": "792", "wb_a2": "TR", "wb_a3": "TUR", "woe_id": -99.0, "adm0_a3_is": "TUR", "adm0_a3_us": "TUR", "adm0_a3_un": -99.0, "adm0_a3_wb": -99.0, "continent": "Asia", "region_un": "Asia", "subregion": "Western Asia", "region_wb": "Europe & Central Asia", "name_len": 6.0, "long_len": 6.0, "abbrev_len": 4.0, "tiny": -99.0, "homepart": 1.0 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[36.913127068842158, 41.335358384764305], [38.347664829264517, 40.948586127275718], [39.512606642420252, 41.102762763018575], [40.373432651538252, 41.013672593747344], [41.554084100110714, 41.535656236327611], [42.619548781104555, 41.583172715819927], [43.582745802592711, 41.092143256182567], [43.752657911968498, 40.740200914058818], [43.65643639504097, 40.253563951166171], [44.400008579288766, 40.005000311842309], [44.793989699082005, 39.713002631177034], [44.109225294782362, 39.428136298168056], [44.421402622257602, 38.281281236314527], [44.225755649600529, 37.971584377589352], [44.772699008977753, 37.170444647768448], [44.293451775902867, 37.00151439060636], [43.942258742047358, 37.256227525372935], [42.779125604021857, 37.385263576805812], [42.349591098811771, 37.229872544904111], [41.212089471203029, 37.074352321921737], [40.673259311695716, 37.091276353497364], [39.522580193852519, 36.716053778626019], [38.699891391765931, 36.712927354472328], [38.16772749202417, 36.901210435527787], [37.066761102045831, 36.623036200500621], [36.739494256341374, 36.817520453431115], [36.68538903173183, 36.259699205056506], [36.417550083163093, 36.040616970355103], [36.149762811026591, 35.821534735653671], [35.782084995269855, 36.274995429014922], [36.160821567537056, 36.650605577128374], [35.550936313628341, 36.565442816711339], [34.714553256984374, 36.795532131490916], [34.02689497247647, 36.219960028623973], [32.509158156064103, 36.1075637883892], [31.699595167779563, 36.644275214172609], [30.621624790171069, 36.677864895162315], [30.391096225717121, 36.26298065850699], [29.699975620245567, 36.144357408181008], [28.732902866335394, 36.676831366516438], [27.64118655773737, 36.658822129862756], [27.048767937943296, 37.653360907536012], [26.318218214633049, 38.208133246405396], [26.804700148228733, 38.985760199533559], [26.170785353304382, 39.463612168936464], [27.280019972449395, 40.420013739578309], [28.81997765474722, 40.460011298172219], [29.240003696415584, 41.219990749672689], [31.145933872204438, 41.087621568357065], [32.347979363745793, 41.736264146484643], [33.513282911927519, 42.018960069337311], [35.16770389175187, 42.040224921225445], [36.913127068842158, 41.335358384764305]]], [[[27.192376743282409, 40.690565700842455], [26.35800906749779, 40.151993923496491], [26.043351271272542, 40.617753607743168], [26.056942172965336, 40.824123440100749], [26.294602085075695, 40.936261298174173], [26.604195590936285, 41.56211456966102], [26.117041863720829, 41.826904608724561], [27.135739373490509, 42.141484890301314], [27.996720411905414, 42.007358710287775], [28.115524529744448, 41.622886054036286], [28.98844282401879, 41.299934190428189], [28.806438429486747, 41.054962063148537], [27.619017368284119, 40.999823309893117], [27.192376743282409, 40.690565700842455]]]] },
        "_id": "France", "type": "Feature", "properties": { "scalerank": 3, "featurecla": "Admin - 0 country", "labelrank": 6.0, "sovereignt": "France", "sov_a3": "FR1", "adm0_dif": 1.0, "level": 2.0, "type": "Dependency", "admin": "French Southern and Antarctic Lands", "adm0_a3": "ATF", "geou_dif": 0.0, "geounit": "French Southern and Antarctic Lands", "gu_a3": "ATF", "su_dif": 0.0, "subunit": "French Southern and Antarctic Lands", "su_a3": "ATF", "brk_diff": 0.0, "name": "Fr.S.Antarctic Lands", "name_long": "French Southern and Antarctic Lands", "brk_a3": "ATF", "brk_name": "Fr.S.and Antarctic Lands", "brk_group": null, "abbrev": "Fr.S.A.L.", "postal": "TF", "formal_en": "Territory of the French Southern and Antarctic Lands", "formal_fr": null, "note_adm0": "Fr.", "note_brk": null, "name_sort": "French Southern and Antarctic Lands", "name_alt": null, "mapcolor7": 7.0, "mapcolor8": 5.0, "mapcolor9": 9.0, "mapcolor13": 11.0, "pop_est": 140.0, "gdp_md_est": 16.0, "pop_year": -99.0, "lastcensus": -99.0, "gdp_year": -99.0, "economy": "6. Developing region", "income_grp": "2. High income: nonOECD", "wikipedia": -99.0, "fips_10": null, "iso_a2": "TF", "iso_a3": "ATF", "iso_n3": "260", "un_a3": "-099", "wb_a2": "-99", "wb_a3": "-99", "woe_id": -99.0, "adm0_a3_is": "ATF", "adm0_a3_us": "ATF", "adm0_a3_un": -99.0, "adm0_a3_wb": -99.0, "continent": "Seven seas(open ocean)", "region_un": "Seven seas(open ocean)", "subregion": "Seven seas(open ocean)", "region_wb": "Sub - Saharan Africa", "name_len": 22.0, "long_len": 35.0, "abbrev_len": 10.0, "tiny": 2.0, "homepart": -99.0 }, "geometry": { "type": "Polygon", "coordinates": [[[68.935, -48.625], [69.58, -48.94], [70.525, -49.065], [70.56, -49.255], [70.28, -49.71], [68.745, -49.775], [68.72, -49.2425], [68.8675, -48.83], [68.935, -48.625]]] },
        "_id": "Thailand", "type": "Feature", "properties": { "scalerank": 1, "featurecla": "Admin-0 country", "labelrank": 3.0, "sovereignt": "Thailand", "sov_a3": "THA", "adm0_dif": 0.0, "level": 2.0, "type": "Sovereign country", "admin": "Thailand", "adm0_a3": "THA", "geou_dif": 0.0, "geounit": "Thailand", "gu_a3": "THA", "su_dif": 0.0, "subunit": "Thailand", "su_a3": "THA", "brk_diff": 0.0, "name": "Thailand", "name_long": "Thailand", "brk_a3": "THA", "brk_name": "Thailand", "brk_group": null, "abbrev": "Thai.", "postal": "TH", "formal_en": "Kingdom of Thailand", "formal_fr": null, "note_adm0": null, "note_brk": null, "name_sort": "Thailand", "name_alt": null, "mapcolor7": 3.0, "mapcolor8": 6.0, "mapcolor9": 8.0, "mapcolor13": 1.0, "pop_est": 65905410.0, "gdp_md_est": 547400.0, "pop_year": -99.0, "lastcensus": 2010.0, "gdp_year": -99.0, "economy": "5. Emerging region: G20", "income_grp": "3. Upper middle income", "wikipedia": -99.0, "fips_10": null, "iso_a2": "TH", "iso_a3": "THA", "iso_n3": "764", "un_a3": "764", "wb_a2": "TH", "wb_a3": "THA", "woe_id": -99.0, "adm0_a3_is": "THA", "adm0_a3_us": "THA", "adm0_a3_un": -99.0, "adm0_a3_wb": -99.0, "continent": "Asia", "region_un": "Asia", "subregion": "South-Eastern Asia", "region_wb": "East Asia & Pacific", "name_len": 8.0, "long_len": 8.0, "abbrev_len": 5.0, "tiny": -99.0, "homepart": 1.0 }, "geometry": { "type": "Polygon", "coordinates": [[[102.584932489026698, 12.186594956913282], [101.687157830819956, 12.645740057826572], [100.831809523524868, 12.627084865769206], [100.978467238369205, 13.412721665902566], [100.097797479251113, 13.406856390837433], [100.018732537844556, 12.307001044153354], [99.47892052612363, 10.846366685423547], [99.153772414143162, 9.963061428258555], [99.222398716226763, 9.239255479362427], [99.873831821698133, 9.20786204674512], [100.279646844486223, 8.295152899606052], [100.459274123132758, 7.429572658717177], [101.017327915452725, 6.856868597842478], [101.62307905477806, 6.74062246340192], [102.141186964936381, 6.221636053894628], [101.814281854257985, 5.810808417174242], [101.154218784593866, 5.691384182147715], [101.075515578213356, 6.204867051615921], [100.259596388756961, 6.642824815289543], [100.085756870527106, 6.464489447450291], [99.690690545655755, 6.848212795433597], [99.519641554769635, 7.34345388430276], [98.988252801512303, 7.907993068875328], [98.503786248775995, 8.382305202666288], [98.339661899817003, 7.794511623562386], [98.150009393305822, 8.350007432483878], [98.259150018306258, 8.973922837759801], [98.553550653073046, 9.932959906448545], [99.038120558673981, 10.960545762572437], [99.587286004639722, 11.892762762901697], [99.196353794351666, 12.80474843998867], [99.212011753336085, 13.269293728076464], [99.097755161538757, 13.827502549693278], [98.430819126379873, 14.622027696180837], [98.192074009191401, 15.123702500870351], [98.537375929765716, 15.308497422746084], [98.903348423256759, 16.177824204976119], [98.49376102091135, 16.837835598207931], [97.859122755934862, 17.567946071843664], [97.375896437573545, 18.445437730375815], [97.797782830804408, 18.627080389881755], [98.25372399291561, 19.708203029860044], [98.959675734454876, 19.752980658440947], [99.543309360759309, 20.186597601802063], [100.115987583417848, 20.417849636308187], [100.548881056726884, 20.109237982661128], [100.606293573003157, 19.508344427971224], [101.282014601651696, 19.462584947176765], [101.035931431077771, 18.408928330961615], [101.059547560635167, 17.51249725999449], [102.113591750092482, 18.109101670804165], [102.413004998791621, 17.932781683824288], [102.998705682387708, 17.961694647691601], [103.20019209189374, 18.309632066312773], [103.956476678485302, 18.240954087796879], [104.716947056092494, 17.428858954330082], [104.779320509868796, 16.441864935771449], [105.589038527450157, 15.570316066952858], [105.544338413517693, 14.723933620660418], [105.218776890078885, 14.273211778210694], [104.281418084736615, 14.416743068901367], [102.988422072361629, 14.225721136934467], [102.348099399833018, 13.394247341358223], [102.584932489026698, 12.186594956913282]]] },
    }
    // handleLoad = map => {
    //     const MapboxLanguage = require('@mapbox/mapbox-gl-language');
    //     const language = new MapboxLanguage();
    //     map.addControl(language);

    //     // force call style update
    //     language._initialStyleUpdate();
    // }

    console.log(latitudeCapital, longitudeCapital);
    return (
        <div>
            <ReactMapboxGL
                style={{ width: '100%', height: '445px' }}
                mapStyle='mapbox://styles/general-m/ckirr8k4t08tt19ozy2u7lkr7'
                accessToken={MAPBOX_ACCESS_TOKEN}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                onViewportChange={setViewport}
                defaultLanguage='es'
            >
                <Marker latitude={latitudeCapital} longitude={longitudeCapital}>

                    <div className={classes.marker}>

                    </div>


                </Marker>
                <FullscreenControl position='top-right' />
                <Source id="Italy" type="geojson" data={geojson}>
                    <Layer
                        id='anything'
                        type='fill'
                        paint={{
                            'fill-color': '#fff',
                            'fill-opacity': 0.3
                        }}
                        source="Italy" />
                </Source>
            </ReactMapboxGL>

        </div >
    )
}

const mapStateToProps = (state: RootStateType) => {
    return state.countryState;
};


export default connect(mapStateToProps, actions)(MapComponent);









