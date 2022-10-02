import {join} from 'path';
import {existsSync, writeFileSync, readFileSync} from 'fs';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '王洪文、张春桥在听取三部批林批孔运动情况汇报时的插话';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
当汇报即将结束时，
张春桥说：你们感到最难办的问题是什么？下一步怎么办？谁讲？

当汇报到部常委的盖子没揭开时，
王洪文说：几个常委？

当汇报完以后，
王洪文说：你们（指青年同志）有什么意见可以提。

当有的同志讲到揭开三部的盖子还有困难时，
王洪文说：不要看得那么难，我觉得三部的形势是好的，三部的广大群众、广大基层干部是好的，盖子是能揭开的。揭不开咱们就砸，砸不开，就用炸弹炸！

当有的同志对军委和总参领导提出批评意见时，
张春桥说：我赞成你的意见，你对军委和总参有意见都可以批评，你的风格比他（指某领导同志）高一点。（说完张春桥就走了）

当有的同志讲到中层干部还有顾虑时，
王洪文说：你们想办法促他们嘛。

当有的同志讲到有的领导干部又要革命又怕革命时，
王洪文说：这话说得不错嘛！

当有的同志讲到四位副总长给胡备文同志回信时，
王洪文说：（对张才千同志）你给签了？签那个干什么吗？在那种情况下，你回这个信有什么必要？何必呢？对群众的影响多大呵！所以人家说上边有个盖盖，我看没说错。

当有的同志说群众揭发某领导对另一领导同志说“我们是患难之交，相依为命，形影不离”时，
王洪文说：这个问题是严重的。总参的问题要解决下，作战部、三部、机要局的问题，刚才×××同志不是讲盘根错节嘛，这话讲得对，你们研究一下，继续发动群众，把盖子揭开，揭总参领导的问题，包括你（指张才千同志）。刚才说什么“相依为命”，你说群众说的没道理嘛！
你们上边这个盖盖自己削掉，问题不就解决了。

当×××说到林彪一伙非常注意抓三部这个阶级斗争工具时，
王洪文说：无产阶级为了革命要抓这个工具，资产阶级为了搞反革命，搞复辟，也要抓这个工具。
这样的情报部门，要注意一下，在阶级斗争中两个阶级都在争夺。
王洪文说：从最近的揭发可以看出，捂盖子的这种人不多，是少数，只要把群众发动起来，是可以搞好的，应当有信心。总参比过去好了些嘛，还要继续克服右倾思想，发动群众揭，要把上边的盖子揭开，有困难，但不是那么大。这次我们要下个决心，一定要揭开，揭不开就砸，砸不开就用炸弹炸。这话可能有点过火了，但一定要揭开。提出一个问题和你们商量，前一阶段你们写了报告，要不要写大字报，考虑到这个部门重要，上一次批了。现在考虑为了真正把三部的盖子揭开，更好地发动群众，如果考虑搞大字报行不行？你们适当规定一下，把大字报贴到机要区，涉及机密的，可写小字报，大字报小字报同时进行。涉及到黄、吴、叶、李、邱的可以用大字报揭，涉及到第十次路线斗争问题可以用大字报，涉及到技术业务机密用小字报。这样有利于运动。这个问题我们议了一下，这次与你们商量。规定不要太烦琐。大字报有个声势问题。大字报可以互相启发，扩大思路。有些干部还处在十字路口的问题，也可以促。

当×××提出常委加几个人领导运动时，
王洪文说：年纪轻的、有冲劲的搞几个，我赞成。

当有的同志讲到群众希望贴大字报，因为总参党委有规定，所以没有写时，
王洪文说：最近，我看了一些情况，根据有些单位的经验，这个问题可以考虑，但有两条：一是要注意保密，二是工作不能停，有人对小字报不怕，大字报一攻就怕了。过去有个经验，有好多保密单位在运动中不敢贴大字报，不敢揭发，结果在文化大革命中问题就爆发了，里边问题最多。我过去在上海所有的保密单位，到运动后期都是老大难。而民用工厂，每次运动发动群众都比较好。在文化大革命中那么多单位都冲开了，整了一下。现在怎么也没有文化大革命中死的人多。所以和三部商量一下，为了把三部问题彻底揭开，在一定范围内贴大字报。

当有的同志讲到三部领导都是三十多年的老关系时，
王洪文说：除了老关系，还有裙带关系。

当×××同志提到北兵南调问题时，
王洪文讲：才千同志，这个事值得总参重视。我最近看了一些材料，当时空军、海军给中央和主席写了报告，没讲调多少兵力，但空海军大量兵力南调。调动一个团要经主席批准，他怎么调呢？一个营一个营地调，一个连个连地调，调十二个连还不是一个团。这些都是通过作战部的。海军舰只调了多少？七、八、九，直到“九·一三”事件发生，有的还在路上，有的先遣已去了，有的还在看地形，“九·一三”事件发生了才停下来。这是个大阴谋。所以，才千同志、作战部要搞好。
        `
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: /[:：]$/.test(i)
              ? ContentType.appellation
              : ContentType.paragraph,
          })),
      ],
      authors: ['王洪文', '张春桥'],
      dates: [
        {
          year: 1974,
          month: 3,
          day: 6,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
总参谋部政治部印
一九七六年十二月`,
      page_start: 1,
      page_end: 4,
    }
  ];
  return res;
}
