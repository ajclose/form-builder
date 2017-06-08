var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];
const fieldset = document.querySelector('fieldset')
for (var i = 0; i < formData.length; i++) {
  if(formData[i].type === 'select') {
    let select = document.createElement('select')
    select.label = formData[i].label
    select.id = formData[i].id
    fieldset.appendChild(select)
    let option = document.createElement('option')
    option.value = "Select Language"
    option.label = "Select Language..."
    option.disabled = true;
    option.selected = true;
    select.appendChild(option)
    for (var j = 0; j < formData[i].options.length; j++) {
    let option = document.createElement('option')
    option.value = formData[i].options[j].value
    option.label = formData[i].options[j].label
    select.appendChild(option)
  }
} else if (formData[i].type === 'textarea') {
  let textarea = document.createElement('textarea')
  textarea.label = formData[i].label
  textarea.placeholder = formData[i].label
  textarea.id = formData[i].id
  fieldset.appendChild(textarea)
} else {
  let input = document.createElement('input')
  input.type = formData[i].type
  input.placeholder = formData[i].label
  input.id = formData[i].id
  fieldset.appendChild(input)
}
}
