import gql from "graphql-tag"

export const QUERY_CATEGORY = gql`
query getCategoryProducts($categoryId: Int) {
  category(id: $categoryId){
  id
  name
    children{
      id
      name
      products{
        items{
          id
          name
        }
      }
    }
  }
}
`

export const QUERY_SUBCATEGORY = gql`
query getSubCategory($categoryId: Int) {
  category(id: $categoryId){
  id
  name
  products{
      items{
        price_range{
          minimum_price{
            regular_price{
              currency
              value
            }
          }
        }
        url_key
        id
        name
        image{url}
      }
    }
  }
}
`

export const QUERY_PRODUCT = gql`
query getProduct($urlKey: String){
  products(filter:{url_key:{eq: $urlKey}}){
    items{
      id
      name
      short_description{
        html
      }
      price_range{
        minimum_price{
          regular_price{
            currency
            value
          }
        }
      }
			description{
        html
      }
      image{
        url
      }
    }
  }
}
`