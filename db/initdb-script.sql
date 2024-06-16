CREATE TABLE alcohols (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL, -- Name of the alcoholic beverage
  image_url VARCHAR(200) NOT NULL,     -- URL of the image representing the beverage
  description TEXT       -- Description of the alcoholic beverage
);

ALTER TABLE alcohols ADD CONSTRAINT unique_name UNIQUE (name);

INSERT INTO alcohols (name, image_url, description) VALUES
  ('Whiskey', 'https://m.media-amazon.com/images/I/81C9nWCPXgL.jpg', 'A distilled alcoholic beverage made from fermented grain mash.'),
  ('Vodka', 'https://www.gourmetencasa-tcm.com/19807/ciroc-vodka-1l.jpg', 'A clear distilled alcoholic beverage with origins in Poland and Russia.'),
  ('Rum', 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/1/0/101597_bumbu_the_original_700.jpg', 'A distilled alcoholic beverage made from sugarcane byproducts.'),
  ('Tequila', 'https://m.media-amazon.com/images/I/71nhs-j4SRL._AC_UF894,1000_QL80_.jpg', 'A distilled beverage made from the blue agave plant, primarily in the area surrounding Tequila, Mexico.'),
  ('Gin', 'https://www.jardinvouvrillon.fr/340-medium_default/gin-citadelle.jpg', 'A distilled alcoholic drink that derives its predominant flavor from juniper berries.'),
  ('Beer', 'https://www.unitedbreweries.com/images/our-brands/heineken.jpg', 'One of the oldest and most widely consumed alcoholic drinks in the world, made from cereal grains.'),
  ('Wine', 'https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548', 'An alcoholic drink typically made from fermented grapes.'),
  ('Absinthe', 'https://cdn2.yopongoelhielo.com/694/calavera-vert-899.jpg', 'A historically described distilled alcoholic beverage with anise flavor.'),
  ('Sake', 'https://www.lupicia.fr/images/231/p/231_342730_max.jpg', 'A Japanese alcoholic beverage made by fermenting rice.'),
  ('Cognac', 'https://www.vinsetchampagnes.fr/12276-large/henessy-cognac-vs.jpg', 'A variety of brandy named after the town of Cognac, France.');
