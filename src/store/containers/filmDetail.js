import { connect } from "react-redux"
import FilmDetail from '../../components/FilmDetail'
import { getSelectedFilm } from '../selectors/film'

const mapStateToProps = state => (
    {
        selectedFilm: getSelectedFilm(state),
    }
)

const mapDispatchToProps = { }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmDetail)