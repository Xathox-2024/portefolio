const headers = document.querySelector("header");

headers.innerHTML += `
    <h1>Bienvenue sur mon Portfolio</h1>
    <p>Développeur web passionné par le design et l'innovation</p>
      `;

      const section = document.querySelector("section");

      section.innerHTML += 
      `
        <h2 class="toggle-title">À propos de moi</h2>
        <p>Je suis un développeur web avec une passion pour créer des expériences utilisateur interactives.</p>
      `;

        const main = document.querySelector("main");

        main.innerHTML += 
        `
        <article>
            <h2>Présentation</h2>
            <div>
                <p>Je m'appelle Tom, j'ai 24 ans, et je vis ma vie comme une aventure palpitante. De mes passions pour les animes, aux dragons, en passant par mon amour pour les tatouages, je m'efforce de faire de chaque jour une occasion d'explorer et de m'exprimer. Chaque aspect de ma personnalité reflète une partie de moi, et j'aime partager ces morceaux avec le monde.</p>
            </div>
        </article>
        <article>
            <h2>Mon amour pour les animes</h2>
            <div>
                <p>Les animes ont toujours été une source d'inspiration pour moi. Ils me transportent dans des mondes où les personnages surmontent des obstacles incroyables et où l'imagination ne connaît aucune limite. J’ai découvert les animes quand j'étais enfant, et depuis, je ne m'en lasse jamais. Chaque série, chaque personnage, est une nouvelle aventure qui me rappelle que l'on peut toujours aller au-delà de ses propres limites.</p>
            </div>
        </article>

        <article>
            <h2>Dragons : créatures de légende</h2>
            <div>
                <p>Les dragons représentent pour moi bien plus que des créatures fantastiques. Ils incarnent la puissance, la sagesse et la liberté. À travers différentes cultures, les dragons sont dépeints comme des êtres mystiques capables de survoler des paysages immenses, de contrôler les éléments, et d’apporter équilibre et chaos. Cette dualité me fascine. J’ai toujours rêvé d’écrire une histoire centrée sur un dragon, un voyageur qui, tout comme moi, explore le monde sans cesse.</p>
            </div>
        </article>

        <article>
            <h2>La gentillesse, une valeur essentielle</h2>
            <div>
                <p>Je crois profondément en la gentillesse. Certains pensent que c'est une faiblesse, mais pour moi, c'est une vraie force. Être gentil ne signifie pas laisser les autres nous marcher dessus, mais plutôt avoir le courage d’agir avec bienveillance, même dans des situations difficiles. J'aime aider les autres et apporter de la positivité autour de moi. Pour moi, c'est ce qui rend le monde un peu plus beau chaque jour.</p>
            </div>
        </article>

        <article>    
            <h2>Les tatouages : une autre forme d'expression</h2>
            <div>
                <p>J'adore les tatouages, c'est pour moi une manière de graver mes passions, mes croyances et mes rêves sur ma peau. Chaque tatouage raconte une histoire, qu'il s'agisse de symboles, d'illustrations ou de simples mots. Mon premier tatouage représente un dragon, bien sûr, car c'est une créature qui m'inspire énormément. À travers mes tatouages, je peux m'exprimer sans avoir à dire un mot. Chaque dessin est une partie de moi, une marque de mon parcours, et chaque nouvelle pièce que j'ajoute reflète ma croissance personnelle.</p>
            </div>
        </article>

        <article>
            <h2>Pourquoi je me fais tatouer ?</h2>
            <div>
                <p>Les tatouages sont pour moi une forme d'art, une manière de capturer un instant ou un sentiment pour toujours. Chaque fois que je me fais tatouer, c'est une étape de plus dans ma quête d’expression personnelle. C’est aussi un moyen de célébrer mes passions, mes expériences et mes rêves. Que ce soit un petit symbole ou une grande pièce, chaque tatouage a une signification particulière.</p>
            </div>
        </article>

        <article>
            <h2>Voyager : mon rêve ultime</h2>
            <div>
                <p>Depuis toujours, je rêve de faire le tour du monde. Voyager est pour moi une façon de sortir de ma zone de confort, de découvrir de nouvelles cultures, d'élargir mes horizons et de m'enrichir personnellement. J'aimerais explorer des endroits aussi divers que le Japon, l'Islande et l'Amérique du Sud. Chaque voyage est une opportunité de grandir, de mieux comprendre le monde qui nous entoure et de revenir avec de nouvelles idées et perspectives.</p>
            </div>
        </article>

        <article>
            <h2>Les destinations qui me fascinent</h2>
            <div>
                <ul>
                    <li><strong>La Nouvelle-Zélande :</strong> Entre mer et montagnes, ce pays est un paradis pour les amateurs de nature et d'aventure, avec ses décors dignes des plus grands films de fantasy.</li>
                    <li><strong>Le Japon :</strong> Pays des animes, des temples anciens et des traditions riches. Mon rêve est de visiter Akihabara, de goûter la cuisine locale, et de découvrir la culture japonaise à travers ses paysages et son histoire.</li>
                    <li><strong>L'Islande :</strong> Ses volcans, ses glaciers et ses aurores boréales me captivent. C'est un pays où la nature règne en maître et où chaque coin semble magique.</li>
                    <li><strong>Le Pérou :</strong> Le Machu Picchu et l'histoire des Incas sont des mystères que j'aimerais explorer. La richesse culturelle et les paysages montagneux du Pérou m'attirent depuis longtemps.</li>
                </ul>
            </div>
        </article>
        

        <article>
            <h2>Ma philosophie au quotidien</h2>
            <div>
                <p>Je vis selon une simple philosophie : profiter de chaque jour comme une nouvelle opportunité d'apprendre et de grandir. Que ce soit à travers mes passions, mes tatouages, ou les relations que je développe avec les autres, je cherche constamment à m'améliorer et à m'exprimer. Pour moi, la vie est une aventure, et je compte bien en explorer chaque coin.</p>
            </div>
        </article>
        `;


        const lien = document.getElementById("pok");

        lien.innerHTML += `
            <h2>Lien Utiles</h2>
        
        <div class="pok-list">
            <div class="pok"><a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/HTML">HTML</a></div>
            <div class="pok"><a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS">CSS</a></div>
            <div class="pok"><a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">JavaScript</a></div>
            <div class="pok"><a target="_blank" href="https://fr.react.dev/">React</a></div>
            <div class="pok"><a target="_blank" href="https://getbootstrap.com/">bootstrap</a></div>
            <div class="pok"><a target="_blank" href="https://developer.mozilla.org/fr/">MDN Web</a></div>
            <div class="pok"><a target="_blank" href="https://www.w3schools.com">w3schools</a></div>
        </div>
        `;


        const contact = document.getElementById("contact");

        contact.innerHTML += 
        `
        <h2>Contact</h2>
        <p>Intéressé par une collaboration ou un projet ? Contactez-moi !</p>
        
        <form>
            <input type="text" placeholder="Nom" required>
            <input type="email" placeholder="E-mail" required>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Envoyer</button>
        </form>

        <a href="#up" id="upButton"><img class="up" src="images/up.png" alt="404"></a>

        `
