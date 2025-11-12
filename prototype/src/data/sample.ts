import type { KanbanBoardT } from '../components/KanbanBoard'

export const SAMPLE_KANBAN: KanbanBoardT = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        { id: '1', title: 'Design search bar', description: 'Align with tokens and a11y', tags: ['design', 'a11y'] },
        { id: '2', title: 'Define filter chips', description: 'Active/inactive states', tags: ['design'] },
      ],
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      cards: [
        { id: '3', title: 'Implement filtering', description: 'Tag + text search', tags: ['frontend'] },
        { id: '4', title: 'Kanban layout', description: 'Responsive columns', tags: ['frontend', 'ux'] },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        { id: '5', title: 'Tokens merged', description: 'Single-file tokens.json', tags: ['infra'] },
      ],
    },
  ],
}


