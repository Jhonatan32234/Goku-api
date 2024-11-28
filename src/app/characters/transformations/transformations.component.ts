import { Component } from '@angular/core';

@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrl: './transformations.component.css'
})
export class TransformationsComponent {

  idp= 1;

  transformations=[
    {
      "id": 1,
      "idp":1,
      "name": "Goku SSJ",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj.webp",
      "ki": "3 Billion",
      "deletedAt": null
    },
    {
      "id": 2,
      "idp":1,
      "name": "Goku SSJ2",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj2.webp",
      "ki": "6 Billion",
      "deletedAt": null
    },
    {
      "id": 3,
      "idp":1,
      "name": "Goku SSJ3",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj3.webp",
      "ki": "24 Billion",
      "deletedAt": null
    },
    {
      "id": 4,
      "idp":1,
      "name": "Goku SSJ4",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj4.webp",
      "ki": "2 Quadrillion",
      "deletedAt": null
    },
    {
      "id": 5,
      "idp":1,
      "name": "Goku SSJB",
      "image": "https://dragonball-api.com/transformaciones/goku_ssjb.webp",
      "ki": "9 Quintillion",
      "deletedAt": null
    },
    {
      "id": 7,
      "idp":2,
      "name": "Vegeta SSJ",
      "image": "https://dragonball-api.com/transformaciones/vegeta SSJ (2).webp",
      "ki": "330.000.000",
      "deletedAt": null
    },
    {
      "id": 8,
      "idp":2,
      "name": "Vegeta SSJ2",
      "image": "https://dragonball-api.com/transformaciones/vegeta SSJ2.webp",
      "ki": "24 Billion",
      "deletedAt": null
    },
    {
      "id": 9,
      "idp":2,
      "name": "Vegeta SSJ4",
      "image": "https://dragonball-api.com/transformaciones/vegeta ssj4.webp",
      "ki": "1.8 Trillion",
      "deletedAt": null
    },
    {
      "id": 10,
      "idp":2,
      "name": "Vegeta SSJB",
      "image": "https://dragonball-api.com/transformaciones/vegeta SSJB.webp",
      "ki": "100 Quintillion",
      "deletedAt": null
    },
    {
      "id": 11,
      "idp":2,
      "name": "Vegeta Mega Instinc Evil",
      "image": "https://dragonball-api.com/transformaciones/vegeta mega instinto.webp",
      "ki": "19.84 Septillion",
      "deletedAt": null
    },
    {
      "id": 12,
      "idp":3,
      "name": "Piccolo Super Namekian",
      "image": "https://dragonball-api.com/transformaciones/Piccolo super namekiano.webp",
      "ki": "2.175 Billion",
      "deletedAt": null
    },
    {
      "id": 13,
      "name": "Piccolo Orange",
      "idp":3,
      "image": "https://dragonball-api.com/transformaciones/picolo orange.webp",
      "ki": "41.25 Quintillion",
      "deletedAt": null
    },
    {
      "id": 14,
      "idp":5,
      "name": "Freezer 2nd Form",
      "image": "https://dragonball-api.com/transformaciones/freezer 2nd forma.webp",
      "ki": "1.060.000",
      "deletedAt": null
    },
    {
      "id": 15,
      "idp":5,
      "name": "Freezer 3rd Form",
      "image": "https://dragonball-api.com/transformaciones/Freezer_3.webp",
      "ki": "2.120.000",
      "deletedAt": null
    },
    {
      "id": 16,
      "idp":5,
      "name": "Freezer Perfect Form",
      "image": "https://dragonball-api.com/transformaciones/render_freezer_perfect_form_by_poh2000-d4n0ewd.webp",
      "ki": "60.000.000",
      "deletedAt": null
    },
    {
      "id": 17,
      "idp":5,
      "name": "Freezer Perfect Form (Golden)",
      "image": "https://dragonball-api.com/transformaciones/freezer_gold.webp",
      "ki": "100 Quintillion",
      "deletedAt": null
    },
    {
      "id": 18,
      "idp":6,
      "name": "Zarbon Monster",
      "image": "https://dragonball-api.com/transformaciones/zarbon monster.webp",
      "ki": "30.000",
      "deletedAt": null
    },
    {
      "id": 19,
      "idp":9,
      "name": "Imperfect Form",
      "image": "https://dragonball-api.com/transformaciones/cell imperfect.webp",
      "ki": "370.000.000",
      "deletedAt": null
    },
    {
      "id": 20,
      "idp":9,
      "name": "Semi Perfect Form",
      "image": "https://dragonball-api.com/transformaciones/Semi-Perfect_Cell.webp",
      "ki": "897.000.000",
      "deletedAt": null
    },
    {
      "id": 21,
      "idp":9,
      "name": "Super Perfect Form",
      "image": "https://dragonball-api.com/transformaciones/cell perfect.webp",
      "ki": "10.970.000.000",
      "deletedAt": null
    },
    {
      "id": 22,
      "idp":10,
      "name": "Gohan SSJ",
      "image": "https://dragonball-api.com/transformaciones/gohan_ssj-removebg-preview.webp",
      "ki": "4.700.000.000",
      "deletedAt": null
    },
    {
      "id": 23,
      "idp":10,
      "name": "Gohan SSJ2",
      "image": "https://dragonball-api.com/transformaciones/Gohan_joven_ssj2.webp",
      "ki": "10.200.000.000",
      "deletedAt": null
    },
    {
      "id": 24,
      "idp":10,
      "name": "Gohan Ultimate",
      "image": "https://dragonball-api.com/transformaciones/gohan_ultimate.webp",
      "ki": "43.000.000.000",
      "deletedAt": null
    },
    {
      "id": 25,
      "idp":10,
      "name": "Gohan Beast",
      "image": "https://dragonball-api.com/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp",
      "ki": " 25.6 Septillion",
      "deletedAt": null
    }
  ]


}
