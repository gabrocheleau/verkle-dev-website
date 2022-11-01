"use strict";(self.webpackChunkverkle_dev=self.webpackChunkverkle_dev||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"implementation/eip",id:"implementation/eip",title:"eip",description:"- [ ] # Verkle trie EIP draft",source:"@site/docs/03-implementation/01-eip.md",sourceDirName:"03-implementation",slug:"/implementation/eip",permalink:"/docs/implementation/eip",draft:!1,editUrl:"https://github.com/ethereum/verkle-dev-website/blob/master/docs/03-implementation/01-eip.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generating the CRS",permalink:"/docs/implementation/crs"},next:{title:"Repos",permalink:"/docs/implementation/repos"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Verkle tree definition",id:"verkle-tree-definition",level:3},{value:"Illustration",id:"illustration",level:3},{value:"Tree embedding",id:"tree-embedding",level:3},{value:"Header values",id:"header-values",level:3},{value:"Code",id:"code",level:3},{value:"Storage",id:"storage",level:3},{value:"Fork",id:"fork",level:3},{value:"Rationale",id:"rationale",level:2},{value:"Verkle tree design",id:"verkle-tree-design",level:3},{value:"Forward-compatibility",id:"forward-compatibility",level:3},{value:"Backward-compatibility",id:"backward-compatibility",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0}),(0,r.kt)("h1",{parentName:"li",id:"verkle-trie-eip-draft"},"Verkle trie EIP draft"))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This EIP introduces a new verkle tree to store the state, the former MPT is frozen and all new state updates land in the verkle tree. Account and Storage trees are merged into one. A subsequent EIP will cover MPT conversion and state expiry."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dankradfeist.de/ethereum/2021/06/18/verkle-trie-for-eth1.html"},"Verkle trees")," solve the key problem standing in the way of Ethereum being stateless-client-friendly: witness sizes. A witness accessing an account in today\u2019s hexary Patricia tree is, in the average case, close to 3 kB, and in the worst case it may be three times larger. Assuming a worst case of 6000 accesses per block (15m gas / 2500 gas per access), this corresponds to a witness size of ~18 MB, which is too large to safely broadcast through a p2p network within a 12-second slot. Verkle trees reduce witness sizes to ~200 bytes per account in the average case, allowing stateless client witnesses to be acceptably small."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"verkle-tree-definition"},"Verkle tree definition"),(0,r.kt)("p",null,"We define a Verkle tree here by providing the function to compute the root commitment given a set of 32-byte keys and 32-byte values. Algorithms for updating and inserting values are up to the implementer; the only requirement is that the root commitment after the update must continue to match the value computed from this specification. We will then define an embedding that provides the 32-byte key at which any particular piece of state information (account headers, code, storage) should be stored."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Bandersnatch curve order\nBANDERSNATCH_MODULUS = \\\n13108968793781547619861935127046491459309155893440570251786403306729687672801\n# Bandersnatch Pedersen basis of length 256\nPEDERSEN_BASIS = [....]\nVERKLE_NODE_WIDTH = len(PEDERSEN_BASIS)\n\ndef group_to_field(point: Point) -> int:\n    # Not collision resistant. Not random oracle. \n    # Binding for Pedersen commitments.\n    assert isinstance(point, Point)\n    if point == bandersnatch.Z:\n        return 0\n    else:\n        return int.from_bytes(point.serialize(), 'little') % BANDERSNATCH_MODULUS\n    \ndef compute_commitment_root(children: Sequence[int]) -> Point:\n    o = bandersnatch.Z\n    for generator, child in zip(PEDERSEN_BASIS, children):\n        o = bandersnatch.add(o, bandersnatch.mul(generator, child))\n    return o\n\ndef extension_and_suffix_tree(stem: bytes31, values: Dict[byte, bytes32]) -> int:\n    sub_leaves = [0] * 512\n    for suffix, value in values.items():\n        sub_leaves[2 * suffix] = int.from_bytes(value[:16], 'little') + 2**128\n        sub_leaves[2 * suffix + 1] = int.from_bytes(value[16:], 'little')\n    C1 = compute_commitment_root(sub_leaves[:256])\n    C2 = compute_commitment_root(sub_leaves[256:])\n    return compute_commitment_root([1, # Extension marker\n                                    int.from_bytes(stem, \"little\"),\n                                    group_to_field(C1),\n                                    group_to_field(C2)] +\n                                    [0] * 252)\n\ndef compute_main_tree_root(data: Dict[bytes32, int],\n                           prefix: bytes) -> int:\n    # Empty subtree: 0\n    if len(data) == 0:\n        return 0\n    elif len(data) == 1:\n        return list(data.values())[0]\n    else:\n        sub_commitments = [\n            compute_main_tree_root({\n                    key: value for key, value in data.items() if\n                    key[:len(prefix) + 1] == prefix + bytes([i])\n                }, prefix + bytes([i]))\n            for i in range(VERKLE_NODE_WIDTH)\n        ]\n        return group_to_field(compute_commitment_root(sub_commitments))\n\ndef compute_verkle_root(data: Dict[bytes32, bytes32]) -> Point:\n    stems = set(key[:-1] for key in data.keys())\n    data_as_stems = {}\n    for stem in stems:\n        commitment_data = Dict[byte, bytes32]()\n        for i in range(VERKLE_NODE_WIDTH):\n            if stem + bytes([i]) in data:\n                commitment_data[i] = data[stem + bytes([i])\n        data_as_stems[stem] = extension_and_suffix_tree(stem, commitment_data)\n    sub_commitments = [\n        compute_main_tree_root({\n                key: value for key, value in data.items() if\n                key[0] == i\n            }, bytes([i]))\n        for i in range(VERKLE_NODE_WIDTH)\n    ]\n    return compute_commitment_root(sub_commitments)\n\n")),(0,r.kt)("p",null,"Note that a value of zero is not the same thing as a position being empty; a position being empty is represented as 0 in the bottom layer commitment, but a position being zero is represented by a different value in the suffix tree commitment (",(0,r.kt)("inlineCode",{parentName:"p"},"2**128")," is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"value_lower")," to distinguish it from empty). This distinction between zero and empty is not a property of the existing Patricia tree, but it is a property of the proposed Verkle tree."),(0,r.kt)("p",null,"In the rest of this document, saving or reading a number at some position in the Verkle tree will mean saving or reading the 32-byte little-endian encoding of that number."),(0,r.kt)("h3",{id:"illustration"},"Illustration"),(0,r.kt)("p",null,"This is an illustration of the tree structure."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/ethereum-hackmd/upload_28fffa630b896df1088eba3ba189cc8b.png",alt:null})),(0,r.kt)("h3",{id:"tree-embedding"},"Tree embedding"),(0,r.kt)("p",null,"Instead of a two-layer structure as in the Patricia tree, in the Verkle tree we will embed all information into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"key: value")," tree. This section specifies which tree keys store the information (account header data, code, storage) in the state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VERSION_LEAF_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BALANCE_LEAF_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NONCE_LEAF_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CODE_KECCAK_LEAF_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CODE_SIZE_LEAF_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HEADER_STORAGE_OFFSET"),(0,r.kt)("td",{parentName:"tr",align:null},"64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CODE_OFFSET"),(0,r.kt)("td",{parentName:"tr",align:null},"128")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VERKLE_NODE_WIDTH"),(0,r.kt)("td",{parentName:"tr",align:null},"256")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAIN_STORAGE_OFFSET"),(0,r.kt)("td",{parentName:"tr",align:null},"256**31")))),(0,r.kt)("p",null,"It\u2019s a required invariant that ",(0,r.kt)("inlineCode",{parentName:"p"},"VERKLE_NODE_WIDTH > CODE_OFFSET > HEADER_STORAGE_OFFSET")," and that ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER_STORAGE_OFFSET")," is greater than the leaf keys. Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"MAIN_STORAGE_OFFSET")," must be a power of ",(0,r.kt)("inlineCode",{parentName:"p"},"VERKLE_NODE_WIDTH"),"."),(0,r.kt)("p",null,"Note that addresses are always passed around as an Address32. To convert existing addresses to ",(0,r.kt)("inlineCode",{parentName:"p"},"Address32"),", prepend with 12 zero bytes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def old_style_address_to_address32(address: Address) -> Address32:\n    return b'\\x00' * 12 + address\n")),(0,r.kt)("h3",{id:"header-values"},"Header values"),(0,r.kt)("p",null,"These are the positions in the tree at which block header fields of an account are stored."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def pedersen_hash(inp: bytes) -> bytes32:\n    assert len(inp) <= 255 * 16\n    # Interpret input as list of 128 bit (16 byte) integers\n    ext_input = inp + b\"\\0\" * (255 * 16 - len(inp))\n    ints = [2 + 256 * len(inp)] + \\\n           [int.from_bytes(ext_input[16 * i:16 * (i + 1)]) for i in range(255)]\n    return compute_commitment_root(ints).serialize()\n\ndef get_tree_key(address: Address32, tree_index: int, sub_index: int):\n    # Asssumes VERKLE_NODE_WIDTH = 256\n    return (\n        pedersen_hash(address + tree_index.to_bytes(32, 'little'))[:31] +\n        bytes([sub_index])\n    )\n    \ndef get_tree_key_for_version(address: Address32):\n    return get_tree_key(address, 0, VERSION_LEAF_KEY)\n    \ndef get_tree_key_for_balance(address: Address32):\n    return get_tree_key(address, 0, BALANCE_LEAF_KEY)\n    \ndef get_tree_key_for_nonce(address: Address32):\n    return get_tree_key(address, 0, NONCE_LEAF_KEY)\n\n# Backwards compatibility for EXTCODEHASH    \ndef get_tree_key_for_code_keccak(address: Address32):\n    return get_tree_key(address, 0, CODE_KECCAK_LEAF_KEY)\n    \n# Backwards compatibility for EXTCODESIZE\ndef get_tree_key_for_code_size(address: Address32):\n    return get_tree_key(address, 0, CODE_SIZE_LEAF_KEY)\n")),(0,r.kt)("p",null,"When any account header field is set, the version is also set to zero. The ",(0,r.kt)("inlineCode",{parentName:"p"},"code_keccak")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code_size")," fields are set upon contract creation."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_tree_key_for_code_chunk(address: Address32, chunk_id: int):\n    return get_tree_key(\n        address,\n        (CODE_OFFSET + chunk_id) // VERKLE_NODE_WIDTH,\n        (CODE_OFFSET + chunk_id)  % VERKLE_NODE_WIDTH\n    )\n")),(0,r.kt)("p",null,"Chunk i stores a 32 byte value, where bytes 1\u202631 are bytes ",(0,r.kt)("inlineCode",{parentName:"p"},"i*31...(i+1)*31 - 1")," of the code (ie. the i\u2019th 31-byte slice of it), and byte 0 is the number of leading bytes that are part of PUSHDATA (eg. if part of the code is ",(0,r.kt)("inlineCode",{parentName:"p"},"...PUSH4 99 98 | 97 96 PUSH1 128 MSTORE...")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," is the position where a new chunk begins, then the encoding of the latter chunk would begin ",(0,r.kt)("inlineCode",{parentName:"p"},"2 97 96 PUSH1 128 MSTORE")," to reflect that the first 2 bytes are PUSHDATA)."),(0,r.kt)("p",null,"For precision, here is an implementation of code chunkification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"PUSH_OFFSET = 95\nPUSH1 = PUSH_OFFSET + 1\nPUSH32 = PUSH_OFFSET + 32\n\ndef chunkify_code(code: bytes) -> Sequence[bytes32]:\n    # Pad to multiple of 31 bytes\n    if len(code) % 31 != 0:\n        code += b'\\x00' * (31 - (len(code) % 31))\n    # Figure out how much pushdata there is after+including each byte\n    bytes_to_exec_data = [0] * len(code)\n    pos = 0\n    while pos < len(code):\n        if PUSH1 <= code[pos] <= PUSH32:\n            pushdata_bytes = code[pos] - PUSH_OFFSET\n        else:\n            pushdata_bytes = 0\n        pos += 1\n        for x in range(pushdata_bytes):\n            bytes_to_exec_data[pos + x] = pushdata_bytes - x\n        pos += pushdata_bytes\n    # Output chunks\n    return [\n        bytes([min(bytes_to_exec_data[pos], 31)]) + code[pos: pos+31]\n        for pos in range(0, len(code), 31)\n    ]\n")),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_tree_key_for_storage_slot(address: Address32, storage_key: int):\n    if storage_key < (CODE_OFFSET - HEADER_STORAGE_OFFSET):\n        pos = HEADER_STORAGE_OFFSET + storage_key\n    else:\n        pos = MAIN_STORAGE_OFFSET + storage_key\n    return get_tree_key(\n        address,\n        pos // VERKLE_NODE_WIDTH,\n        pos % VERKLE_NODE_WIDTH\n    )\n")),(0,r.kt)("p",null,"Note that storage slots in the same size ",(0,r.kt)("inlineCode",{parentName:"p"},"VERKLE_NODE_WIDTH")," range (ie. a range the form ",(0,r.kt)("inlineCode",{parentName:"p"},"x*VERKLE_NODE_WIDTH ... (x+1)*VERKLE_NODE_WIDTH-1"),") are all, with the exception of the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER_STORAGE_OFFSET")," special case, part of a single commitment. This is an optimization to make witnesses more efficient when related storage slots are accessed together. If desired, this optimization can be exposed to the gas schedule, making it more gas-efficient to make contracts that store related slots together (however, Solidity already stores in this way by default)."),(0,r.kt)("h3",{id:"fork"},"Fork"),(0,r.kt)("p",null,"At block number ",(0,r.kt)("inlineCode",{parentName:"p"},"FORK_HEIGHT"),", we replace the state: PatriciaTree structure with a ",(0,r.kt)("inlineCode",{parentName:"p"},"states: Tuple[PatriciaTree, VerkleTree]")," structure. The Patricia tree carries over the data from the previous Patricia tree. The Verkle tree starts off empty, though note that it may become nonempty even during block number ",(0,r.kt)("inlineCode",{parentName:"p"},"FORK_HEIGHT")," as a result of activity within that block itself. From that point on, the Patricia tree is immutable, and all modifications happen to the Verkle tree."),(0,r.kt)("p",null,"Data is saved to the Verkle tree when those fields are modified, or when they are simply accessed. State is read by first attempting to read the Verkle tree, and only if the Verkle tree is empty at a particular position attempting to read the Patricia tree. Note that setting a value to zero (whether balance or a storage key or anything else) sets the value in the tree at the appropriate position to zero, not empty."),(0,r.kt)("h2",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,"This implements all of the logic in transitioning to a Verkle tree, and at the same time reforms gas costs, but does so in a minimally disruptive way that does not require simultaneously changing the whole tree structure. Instead, we add a new Verkle tree that starts out empty, and only new changes to state and copies of accessed state are stored in the tree. The Patricia tree continues to exist, but is frozen."),(0,r.kt)("p",null,"This sets the stage for a future hard fork that swaps the Patricia tree in-place with a Verkle tree storing the same data. Unlike EIP 2584, this replacement Verkle tree does not need to be computed by clients in real time. Instead, because the Patricia tree would at that point be fixed, the replacement Verkle tree can be computed off-chain."),(0,r.kt)("h3",{id:"verkle-tree-design"},"Verkle tree design"),(0,r.kt)("p",null,"The Verkle tree uses a single-layer tree structure with 32-byte keys and values for several reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simplicity: working with the abstraction of a key/value store makes it easier to write code dealing with the tree (eg. database reading/writing, caching, syncing, proof creation and verification) as well as to upgrade it to other trees in the future. Additionally, witness gas rules can become simpler and clearer."),(0,r.kt)("li",{parentName:"ul"},"Uniformity: the state is uniformly spread out throughout the tree; even if a single contract has many millions of storage slots, the contract\u2019s storage slots are not concentrated in one place. This is useful for state syncing algorithms. Additionally, it helps reduce the effectiveness of unbalanced tree filling attacks."),(0,r.kt)("li",{parentName:"ul"},"Extensibility: account headers and code being in the same structure as storage makes it easier to extend the features of both, and even add new structures if later desired.")),(0,r.kt)("p",null,"The single-layer tree design does have a major weakness: the inability to deal with entire storage trees as a single object. This is why this EIP includes removing most of the functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELFDESTRUCT"),". If absolutely desired, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELFDESTRUCT"),"'s functionality could be kept by adding and incrementing an account_state_offset parameter that increments every time an account self-destructs, but this would increase complexity."),(0,r.kt)("h3",{id:"forward-compatibility"},"Forward-compatibility"),(0,r.kt)("p",null,"After the fork, there are two trees: a (no longer changing) hexary Patricia tree for period 0 and a Verkle tree for period 1. At that point we have forward compatibility with two paths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fully implement state expiry, with a subsequent EIP that swaps out the Patricia tree root for a Verkle tree root, begins period 2 and schedules future periods (see the roadmap)"),(0,r.kt)("li",{parentName:"ul"},"Abandon state expiry, and slowly move all period 0 data into period 1 (so we just have weak statelessness)")),(0,r.kt)("p",null,"Hence, while this EIP offers a very convenient path to implementing state expiry, it does not force that course of action, and it does leave open the door to simply sticking with weak statelessness."),(0,r.kt)("h3",{id:"backward-compatibility"},"Backward-compatibility"),(0,r.kt)("p",null,"The two main backwards-compatibility-breaking changes are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SELFDESTRUCT")," neutering (see here for a document stating the case for doing this despite the backwards compatibility loss)"),(0,r.kt)("li",{parentName:"ol"},"Tree structure change makes in-EVM proofs of historical state no longer work")),(0,r.kt)("p",null,"(3) cannot be mitigated this time, but this proposal could be implemented to make this no longer a concern for any tree structure changes in the future."))}c.isMDXComponent=!0}}]);