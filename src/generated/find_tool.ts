import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./find_tool-schemas.js";

const toolsCatalog = [
  {
    "name": "list_comments_replies",
    "description": "Executes the comments.replies.list API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_comments_replies",
    "description": "Executes the comments.replies.create API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_comments_replies",
    "description": "Executes the comments.replies.get API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentReplyId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_comments_replies",
    "description": "Executes the comments.replies.upsert API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentReplyId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_comments_replies",
    "description": "Executes the comments.replies.delete API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentReplyId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_comments_replies",
    "description": "Executes the comments.replies.update API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentReplyId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_comments",
    "description": "Executes the comments.list API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "status",
        "type": "string | string[] | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "create_comments",
    "description": "Executes the comments.create API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_comments",
    "description": "Executes the comments.get API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_comments",
    "description": "Executes the comments.upsert API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_comments",
    "description": "Executes the comments.delete API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_comments",
    "description": "Executes the comments.update API method.",
    "module": "comments",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "commentId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_diagrams_content",
    "description": "Executes the diagrams.content.get API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "replace_diagrams_content",
    "description": "Executes the diagrams.content.replace API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "update_diagrams_content",
    "description": "Executes the diagrams.content.update API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_diagrams_groups",
    "description": "Executes the diagrams.groups.list API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_diagrams_groups",
    "description": "Executes the diagrams.groups.create API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_diagrams_groups",
    "description": "Executes the diagrams.groups.get API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramGroupId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_diagrams_groups",
    "description": "Executes the diagrams.groups.upsert API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramGroupId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_diagrams_groups",
    "description": "Executes the diagrams.groups.delete API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramGroupId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_diagrams_groups",
    "description": "Executes the diagrams.groups.update API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramGroupId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "exists_diagrams_groups",
    "description": "Executes the diagrams.groups.exists API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramGroupId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "get_diagrams_export",
    "description": "Executes the diagrams.export.get API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramExportImageId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_diagrams_export",
    "description": "Executes the diagrams.export.create API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_diagrams",
    "description": "Executes the diagrams.list API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_diagrams",
    "description": "Executes the diagrams.create API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_diagrams",
    "description": "Executes the diagrams.get API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "upsert_diagrams",
    "description": "Executes the diagrams.upsert API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_diagrams",
    "description": "Executes the diagrams.delete API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "update_diagrams",
    "description": "Executes the diagrams.update API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "exists_diagrams",
    "description": "Executes the diagrams.exists API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateViewedAt",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "listThumbnails_diagrams",
    "description": "Executes the diagrams.listThumbnails API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "getThumbnail_diagrams",
    "description": "Executes the diagrams.getThumbnail API method.",
    "module": "diagrams",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "diagramId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_domains",
    "description": "Executes the domains.list API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_domains",
    "description": "Executes the domains.create API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_domains",
    "description": "Executes the domains.get API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "domainId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_domains",
    "description": "Executes the domains.upsert API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "domainId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_domains",
    "description": "Executes the domains.delete API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "domainId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_domains",
    "description": "Executes the domains.update API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "domainId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "exists_domains",
    "description": "Executes the domains.exists API method.",
    "module": "domains",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "domainId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_drafts",
    "description": "Executes the drafts.list API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_drafts",
    "description": "Executes the drafts.create API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_drafts",
    "description": "Executes the drafts.get API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "draftId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_drafts",
    "description": "Executes the drafts.upsert API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "draftId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_drafts",
    "description": "Executes the drafts.delete API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "draftId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_drafts",
    "description": "Executes the drafts.update API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "draftId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "merge_drafts",
    "description": "Executes the drafts.merge API method.",
    "module": "drafts",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "draftId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "text_flows_export",
    "description": "Executes the flows.export.text API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "code_flows_export",
    "description": "Executes the flows.export.code API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "mermaid_flows_export",
    "description": "Executes the flows.export.mermaid API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_flows",
    "description": "Executes the flows.list API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_flows",
    "description": "Executes the flows.create API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_flows",
    "description": "Executes the flows.get API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_flows",
    "description": "Executes the flows.upsert API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_flows",
    "description": "Executes the flows.delete API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_flows",
    "description": "Executes the flows.update API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "exists_flows",
    "description": "Executes the flows.exists API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "listThumbnails_flows",
    "description": "Executes the flows.listThumbnails API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "getThumbnail_flows",
    "description": "Executes the flows.getThumbnail API method.",
    "module": "flows",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "flowId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "byType_landscapes_logs_stats",
    "description": "Executes the landscapes.logs.stats.byType API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "period",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "byEntity_landscapes_logs_stats",
    "description": "Executes the landscapes.logs.stats.byEntity API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "period",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "list_landscapes_logs",
    "description": "Executes the landscapes.logs.list API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "get_landscapes_logs",
    "description": "Executes the landscapes.logs.get API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "actionLogId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "listChildren_landscapes_logs",
    "description": "Executes the landscapes.logs.listChildren API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "actionLogId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_landscapes_export",
    "description": "Executes the landscapes.export.create API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "type",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_landscapes_export",
    "description": "Executes the landscapes.export.get API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "landscapeExportId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "get_landscapes",
    "description": "Executes the landscapes.get API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_landscapes",
    "description": "Executes the landscapes.delete API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_landscapes",
    "description": "Executes the landscapes.update API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "duplicate_landscapes",
    "description": "Executes the landscapes.duplicate API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "targetOrganizationId",
        "type": "string | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "copy_landscapes",
    "description": "Executes the landscapes.copy API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "targetLandscapeId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "search_landscapes",
    "description": "Executes the landscapes.search API method.",
    "module": "landscapes",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "search",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "includeData",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "maxResults",
        "type": "number | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "list_organizations_landscapes",
    "description": "Executes the organizations.landscapes.list API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_organizations_landscapes",
    "description": "Executes the organizations.landscapes.create API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "templateId",
        "type": "string | undefined",
        "required": false
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "scheduledVersions",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "byType_organizations_logs_stats",
    "description": "Executes the organizations.logs.stats.byType API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "period",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "byEntity_organizations_logs_stats",
    "description": "Executes the organizations.logs.stats.byEntity API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "period",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "list_organizations_logs",
    "description": "Executes the organizations.logs.list API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "get_organizations_logs",
    "description": "Executes the organizations.logs.get API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "organizationLogId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_organizations_technologies",
    "description": "Executes the organizations.technologies.list API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_organizations_technologies",
    "description": "Executes the organizations.technologies.create API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_organizations_technologies",
    "description": "Executes the organizations.technologies.get API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "catalogTechnologyId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_organizations_technologies",
    "description": "Executes the organizations.technologies.delete API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "catalogTechnologyId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_organizations_technologies",
    "description": "Executes the organizations.technologies.update API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "catalogTechnologyId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_organizations_users_invites",
    "description": "Executes the organizations.users.invites.list API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_organizations_users_invites",
    "description": "Executes the organizations.users.invites.create API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "revoke_organizations_users_invites",
    "description": "Executes the organizations.users.invites.revoke API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "organizationUserInviteId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_organizations_users",
    "description": "Executes the organizations.users.list API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_organizations_users",
    "description": "Executes the organizations.users.delete API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "userId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_organizations_users",
    "description": "Executes the organizations.users.update API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "userId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_organizations",
    "description": "Executes the organizations.list API method.",
    "module": "organizations",
    "args": []
  },
  {
    "name": "create_organizations",
    "description": "Executes the organizations.create API method.",
    "module": "organizations",
    "args": [
      {
        "name": "aiFeatures",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "aiFeaturesEnabled",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "billingCurrency",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "billingCycle",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "billingEmail",
        "type": "string | undefined",
        "required": false
      },
      {
        "name": "experiments",
        "type": "Record<string, boolean> | undefined",
        "required": false
      },
      {
        "name": "language",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "lineShapeDefault",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "shareLinkAuthDomains",
        "type": "string[] | null | undefined",
        "required": false
      },
      {
        "name": "shareLinksEnabled",
        "type": "boolean | undefined",
        "required": false
      }
    ]
  },
  {
    "name": "get_organizations",
    "description": "Executes the organizations.get API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_organizations",
    "description": "Executes the organizations.delete API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_organizations",
    "description": "Executes the organizations.update API method.",
    "module": "organizations",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_shareLink",
    "description": "Executes the shareLink.get API method.",
    "module": "shareLink",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_shareLink",
    "description": "Executes the shareLink.create API method.",
    "module": "shareLink",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_shareLink",
    "description": "Executes the shareLink.delete API method.",
    "module": "shareLink",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_shareLink",
    "description": "Executes the shareLink.update API method.",
    "module": "shareLink",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "resetShortId",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_tags_groups",
    "description": "Executes the tags.groups.list API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_tags_groups",
    "description": "Executes the tags.groups.create API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_tags_groups",
    "description": "Executes the tags.groups.get API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagGroupId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_tags_groups",
    "description": "Executes the tags.groups.upsert API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagGroupId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_tags_groups",
    "description": "Executes the tags.groups.delete API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagGroupId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_tags_groups",
    "description": "Executes the tags.groups.update API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagGroupId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_tags",
    "description": "Executes the tags.list API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_tags",
    "description": "Executes the tags.create API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_tags",
    "description": "Executes the tags.get API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "upsert_tags",
    "description": "Executes the tags.upsert API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_tags",
    "description": "Executes the tags.delete API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_tags",
    "description": "Executes the tags.update API method.",
    "module": "tags",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "tagId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_teams",
    "description": "Executes the teams.list API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_teams",
    "description": "Executes the teams.create API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_teams",
    "description": "Executes the teams.get API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "teamId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_teams",
    "description": "Executes the teams.delete API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "teamId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_teams",
    "description": "Executes the teams.update API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "teamId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "listLandscapes_teams",
    "description": "Executes the teams.listLandscapes API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "teamId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "listModelObjects_teams",
    "description": "Executes the teams.listModelObjects API method.",
    "module": "teams",
    "args": [
      {
        "name": "organizationId",
        "type": "string",
        "required": true
      },
      {
        "name": "teamId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_versions_reverts",
    "description": "Executes the versions.reverts.list API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_versions_reverts",
    "description": "Executes the versions.reverts.create API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_versions_reverts",
    "description": "Executes the versions.reverts.get API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionRevertId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_versions_reverts",
    "description": "Executes the versions.reverts.update API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionRevertId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "list_versions",
    "description": "Executes the versions.list API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "create_versions",
    "description": "Executes the versions.create API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_versions",
    "description": "Executes the versions.get API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "delete_versions",
    "description": "Executes the versions.delete API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_versions",
    "description": "Executes the versions.update API method.",
    "module": "versions",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "createSignedIconUrl_catalog_technologies",
    "description": "Executes the catalog.technologies.createSignedIconUrl API method.",
    "module": "catalog",
    "args": []
  },
  {
    "name": "get_catalog_technologies",
    "description": "Executes the catalog.technologies.get API method.",
    "module": "catalog",
    "args": [
      {
        "name": "catalogTechnologyId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "csv_model_connections_export",
    "description": "Executes the model.connections.export.csv API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_model_connections",
    "description": "Executes the model.connections.list API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "expand",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_model_connections",
    "description": "Executes the model.connections.create API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_model_connections",
    "description": "Executes the model.connections.get API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelConnectionId",
        "type": "string",
        "required": true
      },
      {
        "name": "expand",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "upsert_model_connections",
    "description": "Executes the model.connections.upsert API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelConnectionId",
        "type": "string",
        "required": true
      },
      {
        "name": "originConnector",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "targetConnector",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "updateDiagrams",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_model_connections",
    "description": "Executes the model.connections.delete API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelConnectionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_model_connections",
    "description": "Executes the model.connections.update API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelConnectionId",
        "type": "string",
        "required": true
      },
      {
        "name": "updateDiagrams",
        "type": "boolean | undefined",
        "required": false
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "generateDescription_model_connections",
    "description": "Executes the model.connections.generateDescription API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelConnectionId",
        "type": "string",
        "required": true
      },
      {
        "name": "type",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "dependenciesJson_model_objects_export",
    "description": "Executes the model.objects.export.dependenciesJson API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelObjectId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "csv_model_objects_export",
    "description": "Executes the model.objects.export.csv API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "list_model_objects",
    "description": "Executes the model.objects.list API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "filter",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      },
      {
        "name": "expand",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "create_model_objects",
    "description": "Executes the model.objects.create API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "get_model_objects",
    "description": "Executes the model.objects.get API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelObjectId",
        "type": "string",
        "required": true
      },
      {
        "name": "expand",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": false
      }
    ]
  },
  {
    "name": "upsert_model_objects",
    "description": "Executes the model.objects.upsert API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelObjectId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  },
  {
    "name": "delete_model_objects",
    "description": "Executes the model.objects.delete API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelObjectId",
        "type": "string",
        "required": true
      }
    ]
  },
  {
    "name": "update_model_objects",
    "description": "Executes the model.objects.update API method.",
    "module": "model",
    "args": [
      {
        "name": "landscapeId",
        "type": "string",
        "required": true
      },
      {
        "name": "versionId",
        "type": "string",
        "required": true
      },
      {
        "name": "modelObjectId",
        "type": "string",
        "required": true
      },
      {
        "name": "body",
        "type": "import(\"C:/Users/mihai/Documents/Projects/IcePa...",
        "required": true
      }
    ]
  }
];

const dispatchMap: Record<string, { namespace: string[], method: string }> = {
  "list_comments_replies": { namespace: ["comments","replies"], method: "list" },
  "create_comments_replies": { namespace: ["comments","replies"], method: "create" },
  "get_comments_replies": { namespace: ["comments","replies"], method: "get" },
  "upsert_comments_replies": { namespace: ["comments","replies"], method: "upsert" },
  "delete_comments_replies": { namespace: ["comments","replies"], method: "delete" },
  "update_comments_replies": { namespace: ["comments","replies"], method: "update" },
  "list_comments": { namespace: ["comments"], method: "list" },
  "create_comments": { namespace: ["comments"], method: "create" },
  "get_comments": { namespace: ["comments"], method: "get" },
  "upsert_comments": { namespace: ["comments"], method: "upsert" },
  "delete_comments": { namespace: ["comments"], method: "delete" },
  "update_comments": { namespace: ["comments"], method: "update" },
  "get_diagrams_content": { namespace: ["diagrams","content"], method: "get" },
  "replace_diagrams_content": { namespace: ["diagrams","content"], method: "replace" },
  "update_diagrams_content": { namespace: ["diagrams","content"], method: "update" },
  "list_diagrams_groups": { namespace: ["diagrams","groups"], method: "list" },
  "create_diagrams_groups": { namespace: ["diagrams","groups"], method: "create" },
  "get_diagrams_groups": { namespace: ["diagrams","groups"], method: "get" },
  "upsert_diagrams_groups": { namespace: ["diagrams","groups"], method: "upsert" },
  "delete_diagrams_groups": { namespace: ["diagrams","groups"], method: "delete" },
  "update_diagrams_groups": { namespace: ["diagrams","groups"], method: "update" },
  "exists_diagrams_groups": { namespace: ["diagrams","groups"], method: "exists" },
  "get_diagrams_export": { namespace: ["diagrams","export"], method: "get" },
  "create_diagrams_export": { namespace: ["diagrams","export"], method: "create" },
  "list_diagrams": { namespace: ["diagrams"], method: "list" },
  "create_diagrams": { namespace: ["diagrams"], method: "create" },
  "get_diagrams": { namespace: ["diagrams"], method: "get" },
  "upsert_diagrams": { namespace: ["diagrams"], method: "upsert" },
  "delete_diagrams": { namespace: ["diagrams"], method: "delete" },
  "update_diagrams": { namespace: ["diagrams"], method: "update" },
  "exists_diagrams": { namespace: ["diagrams"], method: "exists" },
  "listThumbnails_diagrams": { namespace: ["diagrams"], method: "listThumbnails" },
  "getThumbnail_diagrams": { namespace: ["diagrams"], method: "getThumbnail" },
  "list_domains": { namespace: ["domains"], method: "list" },
  "create_domains": { namespace: ["domains"], method: "create" },
  "get_domains": { namespace: ["domains"], method: "get" },
  "upsert_domains": { namespace: ["domains"], method: "upsert" },
  "delete_domains": { namespace: ["domains"], method: "delete" },
  "update_domains": { namespace: ["domains"], method: "update" },
  "exists_domains": { namespace: ["domains"], method: "exists" },
  "list_drafts": { namespace: ["drafts"], method: "list" },
  "create_drafts": { namespace: ["drafts"], method: "create" },
  "get_drafts": { namespace: ["drafts"], method: "get" },
  "upsert_drafts": { namespace: ["drafts"], method: "upsert" },
  "delete_drafts": { namespace: ["drafts"], method: "delete" },
  "update_drafts": { namespace: ["drafts"], method: "update" },
  "merge_drafts": { namespace: ["drafts"], method: "merge" },
  "text_flows_export": { namespace: ["flows","export"], method: "text" },
  "code_flows_export": { namespace: ["flows","export"], method: "code" },
  "mermaid_flows_export": { namespace: ["flows","export"], method: "mermaid" },
  "list_flows": { namespace: ["flows"], method: "list" },
  "create_flows": { namespace: ["flows"], method: "create" },
  "get_flows": { namespace: ["flows"], method: "get" },
  "upsert_flows": { namespace: ["flows"], method: "upsert" },
  "delete_flows": { namespace: ["flows"], method: "delete" },
  "update_flows": { namespace: ["flows"], method: "update" },
  "exists_flows": { namespace: ["flows"], method: "exists" },
  "listThumbnails_flows": { namespace: ["flows"], method: "listThumbnails" },
  "getThumbnail_flows": { namespace: ["flows"], method: "getThumbnail" },
  "byType_landscapes_logs_stats": { namespace: ["landscapes","logs","stats"], method: "byType" },
  "byEntity_landscapes_logs_stats": { namespace: ["landscapes","logs","stats"], method: "byEntity" },
  "list_landscapes_logs": { namespace: ["landscapes","logs"], method: "list" },
  "get_landscapes_logs": { namespace: ["landscapes","logs"], method: "get" },
  "listChildren_landscapes_logs": { namespace: ["landscapes","logs"], method: "listChildren" },
  "create_landscapes_export": { namespace: ["landscapes","export"], method: "create" },
  "get_landscapes_export": { namespace: ["landscapes","export"], method: "get" },
  "get_landscapes": { namespace: ["landscapes"], method: "get" },
  "delete_landscapes": { namespace: ["landscapes"], method: "delete" },
  "update_landscapes": { namespace: ["landscapes"], method: "update" },
  "duplicate_landscapes": { namespace: ["landscapes"], method: "duplicate" },
  "copy_landscapes": { namespace: ["landscapes"], method: "copy" },
  "search_landscapes": { namespace: ["landscapes"], method: "search" },
  "list_organizations_landscapes": { namespace: ["organizations","landscapes"], method: "list" },
  "create_organizations_landscapes": { namespace: ["organizations","landscapes"], method: "create" },
  "byType_organizations_logs_stats": { namespace: ["organizations","logs","stats"], method: "byType" },
  "byEntity_organizations_logs_stats": { namespace: ["organizations","logs","stats"], method: "byEntity" },
  "list_organizations_logs": { namespace: ["organizations","logs"], method: "list" },
  "get_organizations_logs": { namespace: ["organizations","logs"], method: "get" },
  "list_organizations_technologies": { namespace: ["organizations","technologies"], method: "list" },
  "create_organizations_technologies": { namespace: ["organizations","technologies"], method: "create" },
  "get_organizations_technologies": { namespace: ["organizations","technologies"], method: "get" },
  "delete_organizations_technologies": { namespace: ["organizations","technologies"], method: "delete" },
  "update_organizations_technologies": { namespace: ["organizations","technologies"], method: "update" },
  "list_organizations_users_invites": { namespace: ["organizations","users","invites"], method: "list" },
  "create_organizations_users_invites": { namespace: ["organizations","users","invites"], method: "create" },
  "revoke_organizations_users_invites": { namespace: ["organizations","users","invites"], method: "revoke" },
  "list_organizations_users": { namespace: ["organizations","users"], method: "list" },
  "delete_organizations_users": { namespace: ["organizations","users"], method: "delete" },
  "update_organizations_users": { namespace: ["organizations","users"], method: "update" },
  "list_organizations": { namespace: ["organizations"], method: "list" },
  "create_organizations": { namespace: ["organizations"], method: "create" },
  "get_organizations": { namespace: ["organizations"], method: "get" },
  "delete_organizations": { namespace: ["organizations"], method: "delete" },
  "update_organizations": { namespace: ["organizations"], method: "update" },
  "get_shareLink": { namespace: ["shareLink"], method: "get" },
  "create_shareLink": { namespace: ["shareLink"], method: "create" },
  "delete_shareLink": { namespace: ["shareLink"], method: "delete" },
  "update_shareLink": { namespace: ["shareLink"], method: "update" },
  "list_tags_groups": { namespace: ["tags","groups"], method: "list" },
  "create_tags_groups": { namespace: ["tags","groups"], method: "create" },
  "get_tags_groups": { namespace: ["tags","groups"], method: "get" },
  "upsert_tags_groups": { namespace: ["tags","groups"], method: "upsert" },
  "delete_tags_groups": { namespace: ["tags","groups"], method: "delete" },
  "update_tags_groups": { namespace: ["tags","groups"], method: "update" },
  "list_tags": { namespace: ["tags"], method: "list" },
  "create_tags": { namespace: ["tags"], method: "create" },
  "get_tags": { namespace: ["tags"], method: "get" },
  "upsert_tags": { namespace: ["tags"], method: "upsert" },
  "delete_tags": { namespace: ["tags"], method: "delete" },
  "update_tags": { namespace: ["tags"], method: "update" },
  "list_teams": { namespace: ["teams"], method: "list" },
  "create_teams": { namespace: ["teams"], method: "create" },
  "get_teams": { namespace: ["teams"], method: "get" },
  "delete_teams": { namespace: ["teams"], method: "delete" },
  "update_teams": { namespace: ["teams"], method: "update" },
  "listLandscapes_teams": { namespace: ["teams"], method: "listLandscapes" },
  "listModelObjects_teams": { namespace: ["teams"], method: "listModelObjects" },
  "list_versions_reverts": { namespace: ["versions","reverts"], method: "list" },
  "create_versions_reverts": { namespace: ["versions","reverts"], method: "create" },
  "get_versions_reverts": { namespace: ["versions","reverts"], method: "get" },
  "update_versions_reverts": { namespace: ["versions","reverts"], method: "update" },
  "list_versions": { namespace: ["versions"], method: "list" },
  "create_versions": { namespace: ["versions"], method: "create" },
  "get_versions": { namespace: ["versions"], method: "get" },
  "delete_versions": { namespace: ["versions"], method: "delete" },
  "update_versions": { namespace: ["versions"], method: "update" },
  "createSignedIconUrl_catalog_technologies": { namespace: ["catalog","technologies"], method: "createSignedIconUrl" },
  "get_catalog_technologies": { namespace: ["catalog","technologies"], method: "get" },
  "csv_model_connections_export": { namespace: ["model","connections","export"], method: "csv" },
  "list_model_connections": { namespace: ["model","connections"], method: "list" },
  "create_model_connections": { namespace: ["model","connections"], method: "create" },
  "get_model_connections": { namespace: ["model","connections"], method: "get" },
  "upsert_model_connections": { namespace: ["model","connections"], method: "upsert" },
  "delete_model_connections": { namespace: ["model","connections"], method: "delete" },
  "update_model_connections": { namespace: ["model","connections"], method: "update" },
  "generateDescription_model_connections": { namespace: ["model","connections"], method: "generateDescription" },
  "dependenciesJson_model_objects_export": { namespace: ["model","objects","export"], method: "dependenciesJson" },
  "csv_model_objects_export": { namespace: ["model","objects","export"], method: "csv" },
  "list_model_objects": { namespace: ["model","objects"], method: "list" },
  "create_model_objects": { namespace: ["model","objects"], method: "create" },
  "get_model_objects": { namespace: ["model","objects"], method: "get" },
  "upsert_model_objects": { namespace: ["model","objects"], method: "upsert" },
  "delete_model_objects": { namespace: ["model","objects"], method: "delete" },
  "update_model_objects": { namespace: ["model","objects"], method: "update" }
};

// Generated Virtual Module Registration
export function registerFind_toolTools(server: McpServer, client: IcePanelClient) {
  const descriptionStr = "Searches the complete catalog of all available IcePanel tools to help discover which module (?modules=...) contains the required functionality. \n\nAvailable Modules: " + 
    "catalog, comments, diagrams, domains, drafts, flows, landscapes, model, organizations, shareLink, tags, teams, versions";

  server.registerTool(
    "find_tool",
    {
      description: descriptionStr,
      inputSchema: schemas.ZodFindToolRequest
    },
    async (args) => {
      const query = args.query?.toLowerCase() || '';
      const results = toolsCatalog.filter((t: any) => 
        t.name.toLowerCase().includes(query) || 
        t.module.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
      );
      
      const uniqueModules = Array.from(new Set(toolsCatalog.map((t: any) => t.module))).sort();
      
      return { 
        content: [
          { 
            type: "text", 
            text: JSON.stringify({ tool: "find_tool", success: true, data: { modules: uniqueModules, matchCount: results.length, tools: results } }, null, 2) 
          }
        ] 
      };
    }
  );

  server.registerTool(
    "run_tool",
    {
      description: "Executes any IcePanel tool by name. Use find_tool first to discover available tools, then pass the tool name and arguments here.",
      inputSchema: schemas.ZodExecuteToolRequest
    },
    async (args) => {
      const entry = dispatchMap[args.tool_name];
      if (!entry) {
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: false, error: { message: `Unknown tool "${args.tool_name}". Use find_tool to discover available tools.` } }, null, 2) }],
          isError: true
        };
      }

      try {
        let target: any = client;
        for (const ns of entry.namespace) {
          target = target[ns];
        }
        const response = await target[entry.method](args.args || {});
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: true, data: response }, null, 2) }]
        };
      } catch (error: any) {
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: false, error: { message: error.message, status: error.statusCode } }, null, 2) }],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "batch_run_tool",
    {
      description: "Executes multiple IcePanel tools sequentially. Pass an array of actions, each containing 'tool_name' and 'args'. Returns an array of results.",
      inputSchema: schemas.ZodBatchExecuteToolRequest
    },
    async (params) => {
      const results: any[] = [];
      let hasError = false;

      for (const action of params.actions) {
        const entry = dispatchMap[action.tool_name];
        if (!entry) {
          results.push({ tool: action.tool_name, success: false, error: { message: `Unknown tool "${action.tool_name}".` } });
          hasError = true;
          continue;
        }

        try {
          let target: any = client;
          for (const ns of entry.namespace) {
            target = target[ns];
          }
          const response = await target[entry.method](action.args || {});
          results.push({ tool: action.tool_name, success: true, data: response });
        } catch (error: any) {
          results.push({ tool: action.tool_name, success: false, error: { message: error.message, status: error.statusCode } });
          hasError = true;
        }
      }

      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
        isError: hasError
      };
    }
  );

  server.registerTool(
    "batch_run_parallel_tool",
    {
      description: "Executes multiple IcePanel tools in parallel. Pass an array of actions, each containing 'tool_name' and 'args'. Returns an array of results.",
      inputSchema: schemas.ZodBatchExecuteToolRequest
    },
    async (params) => {
      const promises = params.actions.map(async (action) => {
        const entry = dispatchMap[action.tool_name];
        if (!entry) {
          return { tool: action.tool_name, success: false, error: { message: `Unknown tool "${action.tool_name}".` } };
        }

        try {
          let target: any = client;
          for (const ns of entry.namespace) {
            target = target[ns];
          }
          const response = await target[entry.method](action.args || {});
          return { tool: action.tool_name, success: true, data: response };
        } catch (error: any) {
          return { tool: action.tool_name, success: false, error: { message: error.message, status: error.statusCode } };
        }
      });

      const results = await Promise.all(promises);
      const hasError = results.some(r => !r.success);

      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
        isError: hasError
      };
    }
  );
}
