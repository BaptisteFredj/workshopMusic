const artistsList = [
  {
    artistName: "Patrick Sebastien",
    imgSrc:
      "https://static1.ozap.com/articles/9/63/09/59/@/4681817-cyril-hanouna-et-patrick-sebastien-vont-article_default-1.jpg",
    date: "11/07/2024",
    price: 0.5,
    type: "Variété",
    dayTime: "jour",
    description:
      "Patrick Sébastien, de son vrai nom Patrick Boutot, né le 14 novembre 1953 à Brive-la-Gaillarde, est un imitateur, humoriste, acteur, réalisateur, chanteur, auteur-compositeur, poète, écrivain, producteur-animateur d'émissions de divertissement à la télévision et ex-dirigeant de club de rugby.",
  },
  {
    artistName: "Liane Foly",
    imgSrc:
      "https://sf1.telestar.fr/wp-content/uploads/telestarv2/2023/01/liane-foly-pressee-participer-danse-avec-les-stars-veux-faire-mieux-andre-manoukian.jpg",
    date: "11/07/2024",
    price: 1.5,
    type: "Variété",
    dayTime: "nuit",
    description:
      "Éliane Falliex naît le 16 décembre 19621 dans le 7e arrondissement de Lyon2.Ses parents, commerçants en Algérie, arrivent en métropole en 1962 avec la communauté pieds-noirs. Ils s'installent à Lyon, dans le quartier de Perrache, où ils tiennent le commerce La droguerie du sourire1. Liane Foly apprend le piano, le chant, le solfège et la danse classique et modern jazz dès l'âge de 5 ans, et, à 12 ans, entre dans l'orchestre familial Black And White, créé par son père. Sa mère réalise les costumes.",
  },
  {
    artistName: "Serge Lama",
    imgSrc:
      "https://www.fimalac-entertainment.com/wp-content/uploads/2021/09/AA_SQR_WEB-4.jpg",
    date: "12/07/2024",
    price: 3,
    type: "Variété",
    dayTime: "nuit",
    description:
      "Serge Chauvier, dit Serge Lama, est un chanteur et parolier français, né le 11 février 1943 à Bordeaux. Sa carrière ayant commencé en 1964, il est l'un des chanteurs français les plus populaires depuis la fin des années 1960",
  },
  {
    artistName: "Michael Jackson",
    imgSrc:
      "https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/musique/news/histoire-de-culte-thriller-ou-le-sacre-de-michael-jackson-3892436/94074409-1-fre-FR/Histoire-de-culte-Thriller-ou-le-sacre-de-Michael-Jackson.jpg",
    date: "12/07/2024",
    price: 999,
    type: "Pop",
    dayTime: "nuit",
    description:
      "né le 29 août 1958 à Gary (Indiana), est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain. Célébrité planétaire, reconnu comme l’artiste le plus titré de tous les temps, il est une figure principale de l'histoire de l'industrie du spectacle et l'une des icônes culturelles internationales majeures du xxe siècle",
  },
  {
    artistName: "Michel Fugain",
    imgSrc:
      "https://www.gala.fr/imgre/fit/~1~gal~2023~10~30~aae67407-6e76-4bf4-b5ce-56c4ee4443c3.jpeg/1455x1166/quality/80/michel-fugain.jpeg",
    date: "13/07/2024",
    price: 2,
    type: "Variété",
    dayTime: "jour",
    description:
      "né le 12 mai 1942 à Grenoble dans le département de l'Isère, est un chanteur et compositeur français.",
  },
  {
    artistName: "Bob Marley",
    imgSrc:
      "https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/musique/news/destin-brise-bob-marley-l-eternel-king-of-reggae-3928485/94871470-1-fre-FR/Destin-brise-Bob-Marley-l-eternel-King-of-reggae.jpg",
    date: "13/07/2024",
    price: 1999,
    type: "Reggae",
    dayTime: "nuit",
    description:
      "Robert Nesta Marley dit Bob Marley, né le 6 février 1945 à Nine Miles (Jamaïque) et mort à 36 ans le 11 mai 1981 à Miami (États-Unis) d'un cancer (mélanome), est un auteur-compositeur-interprète et guitariste jamaïcain.",
  },
  {
    artistName: "2Pac",
    imgSrc:
      "https://www.radiofrance.fr/s3/cruiser-production/2021/06/1cdcd139-7e38-435e-88d8-e34e7e3d592c/870x489_gettyimages-1125955705.jpg",
    date: "13/07/2024",
    price: 1000,
    type: "Rap",
    dayTime: "jour",
    description:
      "Né Tupac Amaru Shakur le 16 juin 1971 à New York, connu sous les noms de scène de 2Pac et Makaveli (en forme longue Makaveli The Don Killuminati)2, est un rappeur, poète et acteur afro-américain3. Il est considéré comme l'un des plus grands rappeurs de tous les temps4,5.",
  },
  {
    artistName: "Johnny Hallyday",
    imgSrc:
      "https://cdn-s-www.leprogres.fr/images/766DCA49-BF25-4880-8C9B-C53D9B022962/NW_raw/johnny-hallyday-en-2003-en-plein-concert-au-velodrome-de-marseille-photo-afp-1512563406.jpg",
    date: "14/07/2024",
    price: 666,
    type: "Rock",
    dayTime: "nuit",
    description:
      "De son nom de naissance Jean-Philippe Clerc, dit Johnny Hallyday, né le 15 juin 1943 à Paris 9e et mort le 5 décembre 2017 à Marnes-la-Coquette (Hauts-de-Seine), est un chanteur, compositeur et acteur français.",
  },
  {
    artistName: "Pierre Garnier",
    imgSrc:
      "https://img.20mn.fr/hkeZxWDTSTSrEguEbVKqXik/1444x920_quelques-mois-apres-avoir-remporte-star-academy-pierre-garnier-sort-le-7-juin-son-premier-album-chaque-seconde",
    date: "14/07/2024",
    price: 10,
    type: "Variété",
    dayTime: "jour",
    description:
      "Né le 6 mars 2002 à Caen (Calvados), est un auteur-compositeur-interprète et musicien français.",
  },
  {
    artistName: "Jean-Michel Jarre",
    imgSrc:
      "https://img.20mn.fr/3bGY6wVKSXGm4QPRecZm6Ck/1444x920_jean-michel-jarre-french-composer-performer-record-producer-handprints-ceremony-during-the-midem-24-at-palais-des-festivals-in-cannes-25-01-2024-syspeo-sys-a015-credit-syspeo-sipa-2401251744",
    date: "14/07/2024",
    price: 55,
    type: "Rock",
    dayTime: "nuit",
    description:
      "Né le 24 août 1948 dans le 4e arrondissement de Lyon, est un auteur-compositeur français.Parolier pour des interprètes tels que Christophe et Patrick Juvet, il est surtout connu pour sa carrière solo dans la musique électronique, entamée en 1972. Il a vendu quelques 85 millions de disques au cours de sa carrière.",
  },
  {
    artistName: "Britney Spears",
    imgSrc:
      "https://i.f1g.fr/media/cms/orig/2021/06/21/0ad9e7b6e1cd72af64012b07d0729b7092a30b382a436356794d588e8ec58a9d.jpg",
    date: "14/07/2024",
    price: 63,
    type: "Pop",
    dayTime: "jour",
    description:
      "Née le 2 décembre 1981 à McComb (Mississippi), aux États-Unis, est une chanteuse, danseuse, actrice et femme d'affaires américaine. Souvent appelée la Princesse de la pop, elle est reconnue pour avoir influencé la teen pop à la fin des années 1990 et au début des années 2000.",
  },
  {
    artistName: "BЯastila boys",
    imgSrc:
      "https://www.zoomsurlille.fr/wp-content/uploads/2022/01/lille_deraille_bratisla_boys.jpeg",
    date: "14/07/2024",
    price: 142,
    type: "Pop",
    dayTime: "jour",
    description:
      "Il est formé en 2001 et composé de Michaël Youn, Vincent Desagnat et Benjamin Morgaine, pour les besoins d'un sketch de l'émission du Morning Live sur M6. Les activités du groupe ne durent qu'une année, jusqu'en 2002, le temps de la sortie d'un album, Anthologigi, décomposé en trois parties.",
  },
];

export default artistsList;
