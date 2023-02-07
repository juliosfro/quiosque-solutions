# A simple implementation of a PDF generation with HTML.

This repo shows a application thats generate and send back a buffer of PDF.
The app uses handlebars to make a HTML from template.

#### How to use

1. Clone this repo

2. Download the dependencies

```
npm install
or 
yarn add
```
3. Start with 
```
npm run start
or
yarn start
```

You can change the Model and the template, and I think it will works properly.
[See here to know how to build a template engine](https://handlebarsjs.com/guide/)

### Important

>I choosed the pupperteer beacuse this lib can convert the flex box properties.
>In the HTMl template, you have to add the next atribute into styles, otherwise
>the pupperteer will not render some styles.
```css
  html {
      -webkit-print-color-adjust: exact;
    }
```

## Rotas

Cadastro de nova ordem de produção:

<details>
    <summary>
        <code> POST - http://localhost:3333/ </code>
    </summary>

Requisição:
```json
{
	"company_name": "Quiosque Solutions",
	"phone": "+55 (88) 99102-0000",
	"city": "Cianorte",
	"state": "PR",
	"address": "Avenida Santa Catarina, 1200",
	"total": "R$ 200,00",
	"orders": [
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		},
		{
			"name": "Rodamão",
			"shape": "Retangular",
			"unit": "cm",
			"measures": {
				"displayMeasures": "250x20"
			},
			"surfaceFinish": "Polido",
			"edgeFinishing": "Boleado Duplo",
			"edgeFinishingPosition": [
				{
					"position": "1",
					"name": "topo"
				},
				{
					"position": "2",
					"name": "Direita"
				}
			],
			"quantity": "5",
			"price": "100",
			"stoneType": {
				"type": "marble",
				"stone": "Marorom Emperador"
			}
		}
	]
}
```
</details>

Para exibir o template do relatório sem as informações:

<details>
    <summary>
        <code> GET - http://localhost:3333/ </code>
    </summary>
</details>