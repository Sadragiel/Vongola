import * as React from 'react';

const goalsList = [
    {
        preview: 'https://i.pinimg.com/originals/bb/ba/ef/bbbaef9cec9c1da9da1eeb642fd2de3e.png',
        title: 'Virtual Learning',
        slogan:
            'Online curriculum and virtual learning empower schools and districts to expand course offerings, offer more flexible learning options, and even staff your own virtual program with our highly qualified, state-certified virtual instructors',
    },
    {
        preview: 'https://i.pinimg.com/originals/5d/ef/24/5def2432ab2814d8023dc3cecde50f64.png',
        title: 'Art of the Dress',
        slogan: `Thread by thread, stitching it together
            Twilight's dress, cutting out the pattern snip by snip
            Making sure the fabric folds nicely
            It's the perfect color and so hip
            Always gotta keep in mind my pacing
            Making sure the clothes' correctly facing
            I'm stitching Twilight's dress`,
    },
    {
        preview: 'https://i.pinimg.com/originals/e8/9d/93/e89d937080ee5b651393d9cba5feee82.png',
        title: 'Smile Song',
        slogan: `Come on everypony smile, smile, smile
        Fill my heart up with sunshine, sunshine
        All I really need's a smile, smile, smile
        From these happy friends of mine`,
    },
];

export default function () {
    return (
        <section className="goals">
            <ul className="goals__list">
                {goalsList.map((goal) => (
                    <li className="goals__item">
                        <figure className="goals__figure">
                            <img src={goal.preview} alt={goal.title} className="goals__preview" />
                            <figcaption className="goals__caption">
                                <span className="goals__title">{goal.title}</span>
                                <span className="goals__slogan">{goal.slogan}</span>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    );
}
