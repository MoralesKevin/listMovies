import React, { Component } from 'react';
import './ListMovies.css'

class ListMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }



    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "http://92.175.11.66:3001/api/quests/movies/";

        e.preventDefault();
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Le film a été ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un film');
            });

    }

    render() {
        return (
            <div className="FormEmployee">
                <h1>Saisi d'un nom de film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="Film">Film</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="commentaire">Commentaire</label>
                            <textarea type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}>
                            </textarea>

                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ListMovies;