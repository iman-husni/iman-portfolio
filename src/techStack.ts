type StackItem = {
  name: string
  icon: string
}

type StackGroup = {
  label: string
  items: StackItem[]
}

export const stackGroups: StackGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Java', icon: 'Java' },
      { name: 'Kotlin', icon: 'Kotlin' },
      { name: 'PHP', icon: 'Php' },
      { name: 'JavaScript', icon: 'Javascript' },
      { name: 'HTML', icon: 'Html5' },
      { name: 'CSS', icon: 'Css' },
    ],
  },
  {
    label: 'Database',
    items: [{ name: 'MySQL', icon: 'Mysql' }],
  },
  {
    label: 'Tools',
    items: [
      { name: 'GitHub', icon: 'Github' },
      { name: 'Figma', icon: 'Figma' },
      { name: 'VS Code', icon: 'Vscode' },
      { name: 'WordPress', icon: 'Wordpress' },
    ],
  },
  {
    label: 'Exploring',
    items: [
      { name: 'Python', icon: 'Python' },
      { name: 'AI', icon: 'Claude' },
      { name: 'Cloud', icon: 'Googlecloud' },
      { name: 'Mobile', icon: 'Android' },
    ],
  },
]
