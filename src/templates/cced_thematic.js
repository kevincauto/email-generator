export const cced_thematic_template = [
    {
      typeOfRow: 'beginning',
      header: 'Beginning Section',
      fields:  [
        {label: 'Title', name: 'title', value: undefined},
        {label: 'Description', name: 'description', value: undefined},
        {label: 'Month', name: 'month', value: '1', 
            dropdown: [
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
                {value: '3', text: 'Send Month: January'}, 
                {value: '4', text: 'Send Month: February'},
            ]
        }
      ]
    },
    {
      typeOfRow: 'news',
      header: 'News Section',
      fields:  [
        {label: 'Header', name: 'header', value: 'IN THE NEWS'},
        {label: 'First News Title', name: 'title1'},
        {label: 'Description', name: 'description1', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link'},
        {label: 'Second News Title', name: 'title2'},
        {label: 'Description', name: 'description2', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link2'},
        {label: 'Month', name: 'month', value: ''}
      ]
    },
    {
        typeOfRow: 'ce',
        header: 'Continuing Education Section',
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
        header: "Center Banner Ad",
        fields:  [
          {label: 'Link', name: 'link'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70'},
        ]
      },
      {
        typeOfRow: '3_column',
        header: '3 Column Section',
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
        header: 'Featured Section',
        fields:  [
            {label: 'Header', name: 'header', value: 'FEATURED EVENT'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
      typeOfRow: 'products',
      header: 'Products Section',
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
        header: 'Featured Section',
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
        header: 'End of the Email'
      },
  ];