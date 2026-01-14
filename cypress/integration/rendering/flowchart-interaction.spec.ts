import { imgSnapshotTest, renderGraph } from '../../helpers/util.ts';

describe('Flowchart Interaction', () => {
  describe('Interaction Enabled (default)', () => {
    it('should render a flowchart with interaction enabled by default', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Start] --> B{Decision}
        B -->|Yes| C[Action 1]
        B -->|No| D[Action 2]
        C --> E[End]
        D --> E`,
        { flowchart: { htmlLabels: true } }
      );
    });

    it('should render a left-right flowchart with interaction', () => {
      imgSnapshotTest(
        `flowchart LR
        A[Input] --> B[Process] --> C[Output]`,
        { flowchart: { htmlLabels: true } }
      );
    });

    it('should render flowchart with subgraphs and interaction', () => {
      imgSnapshotTest(
        `flowchart TD
        subgraph Frontend
          A[UI] --> B[API Client]
        end
        subgraph Backend
          C[API Server] --> D[Database]
        end
        B --> C`,
        { flowchart: { htmlLabels: true } }
      );
    });
  });

  describe('Custom Highlight Style', () => {
    it('should render flowchart with custom red highlight style', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Start] --> B[End]`,
        {
          flowchart: {
            htmlLabels: true,
            highlightStyle: {
              stroke: '#ff0000',
              strokeWidth: '3px',
            },
          },
        }
      );
    });

    it('should render flowchart with custom green highlight style', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Start] --> B{Decision}
        B -->|Yes| C[Action 1]
        B -->|No| D[Action 2]`,
        {
          flowchart: {
            htmlLabels: true,
            highlightStyle: {
              stroke: '#00ff00',
              strokeWidth: '4px',
            },
          },
        }
      );
    });

    it('should render flowchart with custom blue highlight style and fill', () => {
      imgSnapshotTest(
        `flowchart LR
        A[Node A] --> B[Node B] --> C[Node C]`,
        {
          flowchart: {
            htmlLabels: true,
            highlightStyle: {
              stroke: '#0000ff',
              strokeWidth: '2px',
              fill: '#e0e0ff',
            },
          },
        }
      );
    });
  });

  describe('Interaction Disabled', () => {
    it('should render flowchart with interaction explicitly disabled', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Start] --> B[Middle] --> C[End]`,
        {
          flowchart: {
            htmlLabels: true,
            enableInteraction: false,
          },
        }
      );
    });
  });

  describe('Complex Diagrams with Interaction', () => {
    it('should render complex flowchart with multiple shapes and interaction', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Rectangle] --> B{Diamond}
        B --> C((Circle))
        B --> D[(Database)]
        C --> E>Asymmetric]
        D --> E`,
        { flowchart: { htmlLabels: true } }
      );
    });

    it('should render flowchart with edge labels and interaction', () => {
      imgSnapshotTest(
        `flowchart TD
        A[Start] --> B{Is it valid?}
        B -->|Yes| C[Process]
        B -->|No| D[Error]
        C -->|Success| E[Done]
        D -->|Retry| B`,
        { flowchart: { htmlLabels: true } }
      );
    });
  });
});

