import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '张春桥同志在工总司召开的“坚决响应毛主席伟大号召‘斗私批修’誓师大会”上的讲话';
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
我在六月中旬离开上海，时间已经很长了，就在这个会议上讲话也已有四个月了，我和姚文元同志回到过上海，姚文元同志时间短一些，我长一些，我到上海时也就是毛主席在上海，为了保证主席安全，没有与大家见面。
毛主席指示：“在工人阶级内部，没有根本的利害冲突。在无产阶级专政下的工人阶级内部，更没有理由一定要分裂成为势不两立的两大派组织。”对这个指示我开始并不理解，认为毛主席是提出来商量的，因为毛主席是很民主的。后来向工人阶级传达了，工人马上实现大联合，我跟不上毛主席，也跟不上工人群众。九月中旬毛主席在上海，向毛主席汇报了大联合情况，报上也登了，毛主席很高兴。
毛主席对上海工人特别关心，同毛主席回到北京后，我向主席请示，什么时候回上海。中央工作也很忙，中央有人讲：“上海形势很好，不回了吧！”后来还是毛主席要求我和姚文元回上海过国庆。到上海后也没有更多接触群众。只到了两个厂，一个是XX厂（音大约是耐火八厂），一是上柴厂。
现在文革形势大好。七个省市已建立了革委会，八个省已基本解决了问题。和主席一起到江西、湖南、湖北形势都很好。江西原来乱得很厉害，现在秩序很好，虽然也听到枪声，这是因为要收回枪支，有的枪子弹没有打完，打靶过瘾。枪要收回，整顿后再发。武汉恢复也很快，但不是没有问题，是有反复的。在视察过程，看到农业生产形势也很好。七个八个这样已有十五个省市，其余估计到年底极大部分省能够解决问题，春节可全部解决。比预料要快。但也要有两种准备，可能有反复，有阶级敌人挑拨。凡是一个地方烂透乱够了，问题也就要解决了。好人坏人清楚了，有人希望上海第二次大乱，我们也不怕，倒霉的是“走资派”，锻炼的是造反派。要乱，但是上海造反派不答应，所以乱不成。
七、八、九月全国形势有很大发展，九月份上海发展很快，因为毛主席的指示在上海传的快和上海的大联合基础好。有的大联合可能有反复，也不要紧，大联合一天不行、一月不行、一年不行就等它一天、一月、一年。现在尚有十几个厂没有联合，劝也劝不了，群众讨厌了，闹够了就解决了，我在江苏省问了一派，闹够了吗？有些人毛主席的话不听，市革会的话不听，但群众起来了，也就听了。决定问题的是群众，大家不要急。有的人口头上听毛主席的话，实际上不听，只有群众能制服。曹荻秋就是如此，毛主席的话不听，红卫兵起来了，造反派起来了把他制服了。
现在百分之九十五实现了大联合，也不是内部没有矛盾分歧。工人阶级内部分歧总是有的，问题是怎么处理。造反派内部如果一点分歧没有，就有问题了，这个造反派一定是不发旧民主。只要不是地富反坏右混进兴风作浪，不是走资派、叛徒、反革命捣鬼，是内部矛盾要用团结-批评-团结的公式来解决，离开了这个方针，就要犯错误。毛主席说：“现在容不得人家犯错误，犯了错误就要打倒，这个不好。”要允许人家犯错误，允许人家改正，要热心帮助，耐心帮助，要等待。特别是现在是造反派当权，造反派年轻，不犯错误才怪啦！你们当权就那么正确？你们一犯错误就打倒行不行？
如果坏人当权，就要打倒。多数人犯了错误，需要帮助，这样才能巩固大联合，巩固夺到的权。现在要把三结合大大推进一步，大联合已百分之九十以上了，三结合没有这么多，现在要立革委会多起来了，看今年内能否在上海把各级革命委员会极大多数建立起来。现在多数是造反派当权，有的干部没有事做，犯了错误的干部需要帮助，要解放出来；已经结合的要大胆放手，让他们工作，无非是又错误，如果再犯错误，也不要紧。主席讲：只要不是屡教不改。有了错误就改，改了就行了吗。检讨大致上可以就行了。所谓屡教不改，起码犯三次错误。这样才能团结大多数。如果没有干部，只有年青人，更要犯错误，犯过错误的人，有经验了，没有犯错误的人，没有经验。毛主席在视察过程中，问一些干部，问他们犯过错误没有？挨过整没有？有的人说有，有的人说没有。对没有挨过整的人毛主席说：“这是你们的缺点。”现在看来，只有三结合好了，才能更好开展本单位斗、批、改，巩固大联合，推进三结合。上海有条件能否搞得好一点。上海好像比其他地区快一点，但是距离不大，其他地区也已稳定了，并且有我们的经验，可能比我们走得快，所以没有可以骄傲的。无非是一月风暴吗？一月风暴已过去几个月了，现在要巩固大联合，搞好本单位斗、批、改的经验，其他地区还没有这方面的经验。我们要立新功，就要在大联合中，斗批改中立新功，请同志们好好考虑。要完成这个任务，首先要加强学习“毛著”，毛主席提出“斗私批修”，不学习毛主席著作，很危险，造反时大家是学的，现在任务多了，工作忙了，就不学了，工作也不扎实了。工总司在这方面是好的，但不能满足。毛主席是非常关心干部的，这次回北京，参加一个会，就是接见河南、湖北两个军区、人武部的代表。犯错误的同志，有的是认识问题，所以要学习，要提高，改了就行了吗？有的是立场问题，站错了队，站错了就要重新站过来。毛主席看望后，如河南、湖北的军民一些犯错误的干部感动得哭了，说：“我们犯这样大的错误，毛主席还来看我们。”我们大家不管是否犯过错误都要学习，各级都要办学习班，“斗私批修”。
这次向毛主席汇报工总司的情况，谈到要不要开工代会，工总司去年从斗争中杀出来的，一年来，没有开过代表会，工总司委员能否增加一些，常委也增加一些，保证工总司干部能下去，脱离群众很危险，不劳动，不下去，连本厂的群众也不欢迎，过去干部劳动费了很大的劲，现在工总司劳动不那么好，在厂里的也不劳动。今后要有人上来，有人下去劳动，开会（指工代会）不要搞繁琐哲学，开得活泼一点，人可多一点锻炼干部，使大家了解全局，开会不要筹备一、二个月，要简化，时间不要太长，一年可多开几次，使工总司不会走全总、上总的路，我们的工总会也是在斗争中出来，搞些什么呢？搞全民工会，因此一定要保证阶级队伍，阶级组织，一定不能搞经济主义，搞福利主义。工人起来造反，不是总工会支持，总工会还去支持赤卫队。工总司要保持搞阶级斗争，不要搞福利主义。上总专门搞疗养院，杭州一个，太湖一个，这不叫做疗养上会了，一天到晚争劳保，搞福利。过去工会脱离阶级斗争，脱离毛泽东思想。工总司经过一年来斗争不容易，是党领导下的阶级队伍。现在党组织没有恢复活动，有些同志的观点薄弱了。现在也是有党的领导，有党中央、毛主席的领导，有人认为造反没有党领导也行，这是危险的。实际上现在有党领导：有党中央、毛主席的领导。
精兵简政。现在脱产人员多，市、厂级原来有一批干部，现在又脱产了一大批。小分队搞得很多，只脱产的，不是业余的。一方面劳动力很紧张，一方面脱产人员多。毛主席很关心上海市革命委员会脱产有多少人。毛主席说：“要精兵简政，不要迷信人多。”解放战争时，党中央只有三个人，毛主席、周恩来、任弼时加上两个助手（陆、胡），是五个人。新闻电台人多一些，因为要通消息。那时比革委会那个组都少，要领导全国胜利，我们是靠的路线、政策、是靠的联系群众，不是靠的人多。在视察过程毛主席问了一个军区有多少工作人员？有三千多人，还叫不够。毛主席说：“只要二十多个人就够了。”
上海革委会要搞得小，各区，各厂都要精简，人少了，会议开得短了，都下去了，和群众联系了，有事同群众商量了。现在小报多极了，粗制滥造，没有人看。有些小道消息，把我们思想搞乱。今天看到一个小报，说毛主席到相浦发电厂去了，根本没有这回事。这些东西少搞一点，节约一些。现在汽车也不少，国庆节宴会汽车之多，吓了一跳，不但多而且好。你们现在要坐汽车过瘾，现在我却苦恼，走不出去。二年前，很自由，现在没有办法看大字报，接近群众。现在大会也很浪费。49年进城，老干部很朴素，51年就三反、五反，资产阶级腐蚀了我们一批干部。现在的走资派，原来也不坏，就是从汽车、房子开始。不要到两年，在文化大革命后期就要开展三反、五反，现在已经有些人不妙，手脚不干净了。所以要精兵简政，队伍精简了，就能抵抗资产阶级腐蚀。
要加强组织性、纪律性。现在掌权了，老是无政府主义不行，况且已经有了政府，要建立革命秩序，现在动不动是老几。原来刘少奇黑修养做奴隶主义，现在我们要搞无产阶级组织性纪律性，不是奴隶主义。现在有些人就是不请假不上班。工人阶级先进，就是觉悟高，组织性纪律性强，农民、小资产阶级不上，工人阶级要做模范。
告诉大家一个好消息：毛主席在上海时曾问我说：“在上海过国庆，好不好？”我说：“好是好，就是怕人民广场会开不好，人民广场被围住。”后来中央要主席回去，就回去了。这次谢胡同志要到上海来，怕夹道欢迎时大家都要去握手，走不过来。如果秩序好，一次、二次、三次以后，毛主席一定会到上海来参加大会。
生产、交通恢复了，煤炭增加，农业丰收，农民收入多了，反映到市场上来，要多生产一点。革命搞好了，生产会上去的。希望上海工人造反派规划一下，三个月内要搞那几件事，集中力量，打歼灭战，以实际行动来迎接一月风暴一周年，迎接一九六八年。
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['张春桥'],
      dates: [
        {
          year: 1967,
          month: 10,
          day: 6,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
（根据记录整理，仅供参考）
上海财贸系统革命造反委员会政宣组翻印
上海市  虹口区商业联校再翻印
1967.10.10
      `,
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}