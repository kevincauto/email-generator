export const cced_thematic_template = [
    {
      typeOfRow: 'beginning',
      fields:  [
        {label: 'Title', name: 'title', value: undefined},
        {label: 'Description', name: 'description', value: undefined},
        {label: 'Month', name: 'month', value: 1, 
            dropdown: [
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
            ]
        }
      ]
    },
    {
      typeOfRow: 'news',
      fields:  [
        {label: 'Header', name: 'header', value: 'IN THE NEWS'},
        {label: 'First News Title', name: 'title1', value: 'First Title'},
        {label: 'Description', name: 'description1', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link'},
        {label: 'Second News Title', name: 'title2', value: 'Second Title'},
        {label: 'Description', name: 'description2', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link2'},
        {label: 'Month', name: 'month', value: ''}
      ]
    },
    {
        typeOfRow: 'ce',
        fields:  [
          {label: 'Title', name: 'title'},
          {label: 'Description', name: 'description'},
          {label: 'Author', name: 'author'},
          {label: 'Description', name: 'description'},
          {label: 'Credits', name: 'credits'},
          {label: 'Cost', name: 'cost'},
          {label: 'Source', name: 'author'},
          {label: 'Provider', name: 'provider'},
          {label: 'Available Dates', name: 'dates'},
          {label: 'Link', name: 'link'}
        ]
      },
      {
        typeOfRow: 'center_banner',
        fields:  [
          {label: 'Link', name: 'link'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70'},
        ]
      },
      {
        typeOfRow: '3_column',
        fields:  [
            {label: 'First Header', name: 'header1'},
            {label: 'First Title', name: 'title1'},
            {label: 'First Author', name: 'author1'},
            {label: 'First Link', name: 'link1'},
            {label: 'Second Header', name: 'header2'},
            {label: 'Second Title', name: 'title2'},
            {label: 'Second Author', name: 'author2'},
            {label: 'Second Link', name: 'link2'},
            {label: 'Third Header', name: 'header3'},
            {label: 'Third Title', name: 'title3'},
            {label: 'Third Author', name: 'author3'},
            {label: 'Third Link', name: 'link3'},            
        ]
      },
      {
        typeOfRow: 'featured',
        fields:  [
            {label: 'Header', name: 'header'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
      typeOfRow: 'products',
      fields:  [
          {label: 'Header', name: 'header', value: 'FEATURED PRODUCTS'},
          {label: 'First Product', name: 'product1'},
          {label: 'First Description', name: 'description1'},
          {label: 'First Link', name: 'link2'},
          {label: 'Second Product', name: 'product1'},
          {label: 'Second Description', name: 'description1'},
          {label: 'Second Link', name: 'link2'},
          {label: 'Featured Product', name: 'product3'},
          {label: 'Featured Description', name: 'description3'},
          {label: 'Featured Link', name: 'link3'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'},
      ]
    },
    {
        typeOfRow: 'featured',
        fields:  [
            {label: 'Header', name: 'header', value: 'FEATURED VIDEO'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
        typeOfRow: 'end',
        fields: [{label: 'Header', name: 'title'}]
      },
  ];