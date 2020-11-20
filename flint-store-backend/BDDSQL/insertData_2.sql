INSERT INTO Category (categoryName)
VALUES 
    ('Weapons - Hunting equipment'),
    ('Torchlight evening'),
    ('Drinks');

INSERT INTO SubCategory (subCategoryName, FK_categoryId)
VALUES  
    ('Mace', 3),
    ('Lance', 3),
    ('Fronde', 3),
    ('Bow', 3),
    ('Arrows Pack', 3),
    ('Smoke', 4),
    ('Blazing Food', 4),
    ('Wines', 5),
    ('Beers', 5);

INSERT INTO Item (itemName, itemDescription, itemPrice, itemImg, FK_subCategoryId, FK_categoryId)
VALUES
    ('Vibrating', 'When you need to make your enemies shake in fear but also physically', 49, 'https://images-na.ssl-images-amazon.com/images/I/51AHZGMp01L._AC_SX679_.jpg ', 7, 3),
    ('Oak', 'A thicker stronger Oak stick, nevermind the shorter size', 23, 'https://jardinage.lemonde.fr/images/dossiers/historique/mini/chenes-171748-650-325.jpg', 7, 3),
    ('Birch', 'A thicker Birch stick, serves all hitting purposes', 20, 'https://www.jardinet.fr/blog/wp-content/uploads/2017/11/Tout-savoir-sur-le-bouleau.jpg', 7, 3),
    ('Basic', 'The basic spear you will need in your life', 10,'https://inserezunepiece.files.wordpress.com/2016/05/carrot-on-a-stick.jpg?w=584', 8, 3),
    ('For Mammoths', 'The one you must have to hunt some big mammals.',  15, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Neptune_cruise_missile_05.jpg', 8, 3),
    ('For Beavers', 'Thin and and lightweight perfect to hunt small animals.', 14, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Neptune_cruise_missile_05.jpg', 8, 3),
    ('For People', 'Sharpest then a shark is theet the perfect tool to kill you friend.', 100, 'https://static.turbosquid.com/Preview/2014/10/01__13_59_52/render1.pngd653606e-2afd-45df-8653-6b1b2aeafee2Large.jpg', 8, 3),
    ('Useless', 'Just a spear.', 10, 'https://image.shutterstock.com/image-photo/pointed-stick-sharp-wooden-spear-260nw-1631071417.jpg', 8, 3),
    ('Mammoth ligament', 'Made of a ligament of mammouth', 4, 'http://www.survie-et-survivalisme.com/wp-content/uploads/2016/10/lance-pierre-en-bois.jpg', 9, 3),
    ('Fémur bone', 'Made of human femure.', 8, 'https://www.chefcook.fr/4707-intermediaire_default/os-de-veau-femur-scie.jpg', 9, 3),
    ('Classic', 'The basic sling.', 20, 'https://i.pinimg.com/564x/c1/5e/0f/c15e0fef4edcfe838d5255a40e90ca42.jpg', 9, 3),
    ('Compound bow', 'Bow with a pulley to increase its range.', 12, 'https://www.erhart-sports.com/4536-thickbox_default/hoyt-alpha-rx4-arc-a-poulies-de-chasse.jpg', 10, 3),
    ('Longbow', 'Long bow to hunt from long distance.', 19, 'https://la-forge-medievale.com/927-large_default/-arc-long-viking-70-.jpg', 9, 3),
    ('Shortbow', 'Small and robust you can take it everywhere.', 18, 'https://tangrammontessori.com/8922-large/petit-arc.jpg', 10, 3),
    ('x20', 'A stack of arrow.', 25, 'https://m.media-amazon.com/images/I/51oZfRK2K+L._AC_SY450_.jpg', 11, 3),
    ('Prehistoric tobacco', 'Tobacco to dry', 8, 'https://i1.wp.com/lesmoutonsenrages.fr/wp-content/uploads/2014/12/tobacco-19997_640.jpg', 12, 4),
    ('Weed do-it yourself', 'The weed you would never have given to your mom', 150, 'https://cdn.aarp.net/content/dam/aarp/health/drugs_supplements/2019/08/1140-med-marijuana-caduceus.imgcache.rev873985b7234d2a2df9a09f5cefacea57.jpg', 12, 4),
    ('Smoking bear skin', 'first catch a bear and then think of smoking', 1000, 'https://lh3.googleusercontent.com/proxy/vViBhqCJzfGuAADRn-3kM0jywGO_1TV2dWL9JcfG448pTdReH8Yx1bzg8ye5zD7ev-lvXDCohZo0RcEaw39vr0L8uSHGUrZwmtmVKJ8', 12, 4),
    ('Smoking yak hair', 'then catch a yak and a barber at the same time', 900, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg/1200px-Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg', 12, 4),
    ('Paleo apero', 'Apero time', 20, 'https://www.lanutrition.fr/sites/default/files/styles/preview_article_medium_line/public/ressources/aliments_diabete_glucometres.jpg?itok=Mo9HWzNX', 13, 4),
    ('Grapes', 'Learn to cultivate grape and forget about juices!', 8, 'https://www.irbms.com/wp-content/uploads/2019/09/raisin-sante-600x400.jpg', 14, 5),
    ('Press', 'it is time to get your feet dirty ', 12, 'https://www.champagne.fr/assets/images/3-vigne-au-vin/Elaboration/pressoir-traditionnel.jpg', 14, 5),
    ('Barrel', 'you cannot wait for the iron to be invented!', 52, 'https://www.temesso.fr/media/image/67/7b/ff/tonneau-de-decoration-table-bar-225-litres-en-bois-de-che-ne-massif-1.jpg', 14, 5),
    ('Hop', 'it will become your favourite drink even before water', 20, 'https://www.challenges.fr/assets/afp/2020/04/25/f63aca8f6a95d7bd10b3a2e6dee2580a28787d2a.jpg', 15, 5),
    ('Malt', 'you need to buy hop first', 15, 'https://njmonthly.com/wp-content/uploads/cache/2017/07/malt/1133944283.jpg', 15, 5),
    ('Yeast', 'if you have found the 2 previous articles of Beers section, then cath this one', 3, 'https://cdn.bioalaune.com/img/article/thumb/900x500/13757-levure_de_biere_complement_alimentaire_naturel_aux_multiples_bienfaits.jpg', 15, 5);





